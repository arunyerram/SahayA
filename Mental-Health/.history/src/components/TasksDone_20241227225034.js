import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./Firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "../css/TasksDone.css";
import Nav from "./Nav.js";
const TaskDone = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);

  const tasksCollection = collection(db, "tasks");

  // Fetch tasks from Firebase
  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(tasksCollection);
      const tasksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task to Firebase
  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const docRef = await addDoc(tasksCollection, {
        text: newTask,
        completed: false,
        timestamp: new Date(),
      });
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: docRef.id, text: newTask, completed: false },
      ]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  // Delete a task from Firebase
  const deleteTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await deleteDoc(taskDoc);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  // Mark a task as completed
  const toggleCompletion = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const taskDoc = doc(db, "tasks", id);
    await updateDoc(taskDoc, { completed: !task.completed });

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Nav/>

    <div className="tasks-container">
      <h1 className="tasks-title">My To-Do List</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="add-task-button">Add Task</button>
      </div>

      {loading ? (
        <p className="loading-message">Loading tasks...</p>
      ) : (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <span onClick={() => toggleCompletion(task.id)} className="task-text">
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} className="delete-task-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

    <Link
        to="/home"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        Back
      </Link>


    </>
  );
};

export default TaskDone;

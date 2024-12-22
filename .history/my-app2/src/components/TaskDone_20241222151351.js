import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { saveTask, getTasks, deleteTask, saveFeedback, saveUserInfo } from "./Firebase";


const TaskDone = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

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
    try {
      const task = tasks.find((t) => t.id === id);
      const taskDoc = doc(db, "tasks", id);
      await addDoc(taskDoc, { completed: !task.completed });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (error) {
      console.error("Error toggling task completion: ", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
          >
            <span
              onClick={() => toggleCompletion(task.id)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDone;

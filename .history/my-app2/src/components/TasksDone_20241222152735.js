// import React, { useState, useEffect } from "react";
// import { db } from "./Firebase";
// import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
// // import { saveTask, getTasks, deleteTask, saveFeedback, saveUserInfo } from "./Firebase";


// const TaskDone = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const tasksCollection = collection(db, "tasks");

//   // Fetch tasks from Firebase
//   const fetchTasks = async () => {
//     try {
//       const querySnapshot = await getDocs(tasksCollection);
//       const tasksData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setTasks(tasksData);
//     } catch (error) {
//       console.error("Error fetching tasks: ", error);
//     }
//   };

//   // Add a new task to Firebase
//   const addTask = async () => {
//     if (!newTask.trim()) return;

//     try {
//       const docRef = await addDoc(tasksCollection, {
//         text: newTask,
//         completed: false,
//         timestamp: new Date(),
//       });
//       setTasks((prevTasks) => [
//         ...prevTasks,
//         { id: docRef.id, text: newTask, completed: false },
//       ]);
//       setNewTask("");
//     } catch (error) {
//       console.error("Error adding task: ", error);
//     }
//   };

//   // Delete a task from Firebase
//   const deleteTask = async (id) => {
//     try {
//       const taskDoc = doc(db, "tasks", id);
//       await deleteDoc(taskDoc);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//     } catch (error) {
//       console.error("Error deleting task: ", error);
//     }
//   };

//   // Mark a task as completed
//   const toggleCompletion = async (id) => {
//     try {
//       const task = tasks.find((t) => t.id === id);
//       const taskDoc = doc(db, "tasks", id);
//       await addDoc(taskDoc, { completed: !task.completed });
//       setTasks((prevTasks) =>
//         prevTasks.map((task) =>
//           task.id === id ? { ...task, completed: !task.completed } : task
//         )
//       );
//     } catch (error) {
//       console.error("Error toggling task completion: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Add a new task..."
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className={task.completed ? "completed" : ""}
//           >
//             <span
//               onClick={() => toggleCompletion(task.id)}
//               style={{ cursor: "pointer" }}
//             >
//               {task.text}
//             </span>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskDone;



// import React, { useState, useEffect } from "react";
// import { getCompletedTasks, deleteCompletedTask } from "./firebase";
// import "./TasksDone.css";

// function TasksDone() {
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompletedTasks = async () => {
//       try {
//         const fetchedTasks = await getCompletedTasks();
//         setCompletedTasks(fetchedTasks);
//       } catch (error) {
//         console.error("Error fetching completed tasks: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompletedTasks();
//   }, []);

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteCompletedTask(id);
//       setCompletedTasks(completedTasks.filter((task) => task.id !== id));
//     } catch (error) {
//       console.error("Error deleting completed task: ", error);
//     }
//   };

//   return (
//     <div className="tasks-done-container">
//       <h2 className="tasks-done-header">Tasks Done</h2>
//       {loading ? (
//         <p className="tasks-done-loading">Loading completed tasks...</p>
//       ) : completedTasks.length === 0 ? (
//         <p className="tasks-done-empty">No tasks completed yet.</p>
//       ) : (
//         <ul className="tasks-done-list">
//           {completedTasks.map((task) => (
//             <li key={task.id} className="tasks-done-item">
//               <span>{task.task}</span>
//               <button
//                 className="tasks-done-delete"
//                 onClick={() => handleDeleteTask(task.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default TasksDone;



// TasksDone.js
import React, { useEffect, useState } from "react";
import { getCompletedTasks, deleteTask } from "../Firebase";
import "./TasksDone.css";

const TasksDone = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch completed tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getCompletedTasks();
        setCompletedTasks(tasks);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Delete task handler
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setCompletedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="tasks-done-container">
      <h2 className="tasks-done-title">Completed Tasks</h2>
      {loading ? (
        <p className="loading-message">Loading completed tasks...</p>
      ) : completedTasks.length === 0 ? (
        <p className="no-tasks-message">No completed tasks yet.</p>
      ) : (
        <ul className="tasks-done-list">
          {completedTasks.map((task) => (
            <li key={task.id} className="tasks-done-item">
              <span className="task-text">{task.task}</span>
              <button
                className="delete-task-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksDone;

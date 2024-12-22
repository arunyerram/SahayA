// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
//
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth=getAuth();
// export const db=getFirestore(app);
// export default app;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const db = getFirestore(app);

// /**
//  * Save feedback to Firestore
//  * @param {string} feedback - The feedback text to save
//  * @returns {Promise} - Resolves with the document reference or rejects with an error
//  */
// export const saveFeedback = async (feedback) => {
//   try {
//     const feedbackCollection = collection(db, "feedbacks");
//     const docRef = await addDoc(feedbackCollection, {
//       feedback,
//       timestamp: new Date(),
//     });
//     return docRef;
//   } catch (error) {
//     console.error("Error saving feedback: ", error);
//     throw error;
//   }
// };

// export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyDprtWmFp0iEIS5_sCEf9gG8XbW0P2mmBA",
//   authDomain: "login-auth-5543b.firebaseapp.com",
//   projectId: "login-auth-5543b",
//   storageBucket: "login-auth-5543b.firebasestorage.app",
//   messagingSenderId: "261251587986",
//   appId: "1:261251587986:web:e709ce20c740f612452b4b"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const db = getFirestore(app);

// /**
//  * Save feedback to Firestore
//  * @param {string} feedback - The feedback text to save
//  * @returns {Promise} - Resolves with the document reference or rejects with an error
//  */
// export const saveFeedback = async (feedback) => {
//   try {
//     const feedbackCollection = collection(db, "feedbacks");
//     const docRef = await addDoc(feedbackCollection, {
//       feedback,
//       timestamp: new Date(),
//     });
//     return docRef;
//   } catch (error) {
//     console.error("Error saving feedback: ", error);
//     throw error;
//   }
// };

// /**
//  * Save user information to Firestore
//  * @param {string} firstName - The first name of the user
//  * @param {string} lastName - The last name of the user
//  * @param {number} age - The age of the user
//  * @param {string} address - The address of the user
//  * @returns {Promise} - Resolves with the document reference or rejects with an error
//  */
// export const saveUserInfo = async (firstName, lastName, age, address) => {
//   try {
//     const userInfoCollection = collection(db, "userinfo");
//     const docRef = await addDoc(userInfoCollection, {
//       firstName,
//       lastName,
//       age,
//       address,
//       timestamp: new Date(),
//     });
//     return docRef;
//   } catch (error) {
//     console.error("Error saving user info: ", error);
//     throw error;
//   }
// };

// export default app;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDprtWmFp0iEIS5_sCEf9gG8XbW0P2mmBA",
  authDomain: "login-auth-5543b.firebaseapp.com",
  projectId: "login-auth-5543b",
  storageBucket: "login-auth-5543b.firebasestorage.app",
  messagingSenderId: "261251587986",
  appId: "1:261251587986:web:e709ce20c740f612452b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

/**
 * Save a new task to Firestore
 * @param {string} task - The task text to save
 * @returns {Promise} - Resolves with the document reference or rejects with an error
 */
export const addTask = async (task) => {
  try {
    const tasksCollection = collection(db, "tasks");
    const docRef = await addDoc(tasksCollection, {
      task,
      completed: false, // Tasks are initially not completed
      timestamp: new Date(),
    });
    return docRef;
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

/**
 * Get all tasks from Firestore
 * @returns {Promise} - Resolves with an array of task objects
 */
export const getTasks = async () => {
  try {
    const tasksCollection = collection(db, "tasks");
    const snapshot = await getDocs(tasksCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    throw error;
  }
};

/**
 * Delete a task from Firestore by task ID
 * @param {string} taskId - The ID of the task to delete
 * @returns {Promise} - Resolves when the task is deleted
 */
export const deleteTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await deleteDoc(taskDoc);
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};

/**
 * Mark a task as completed in Firestore
 * @param {string} taskId - The ID of the task to mark as completed
 * @returns {Promise} - Resolves when the task is updated
 */
export const completeTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await updateDoc(taskDoc, { completed: true });
  } catch (error) {
    console.error("Error completing task: ", error);
    throw error;
  }
};

/**
 * Save feedback to Firestore
 * @param {string} feedback - The feedback text to save
 * @returns {Promise} - Resolves with the document reference or rejects with an error
 */
export const saveFeedback = async (feedback) => {
  try {
    const feedbackCollection = collection(db, "feedbacks");
    const docRef = await addDoc(feedbackCollection, {
      feedback,
      timestamp: new Date(),
    });
    return docRef;
  } catch (error) {
    console.error("Error saving feedback: ", error);
    throw error;
  }
};

/**
 * Save user information to Firestore
 * @param {string} firstName - The first name of the user
 * @param {string} lastName - The last name of the user
 * @param {number} age - The age of the user
 * @param {string} address - The address of the user
 * @returns {Promise} - Resolves with the document reference or rejects with an error
 */
export const saveUserInfo = async (firstName, lastName, age, address) => {
  try {
    const userInfoCollection = collection(db, "userinfo");
    const docRef = await addDoc(userInfoCollection, {
      firstName,
      lastName,
      age,
      address,
      timestamp: new Date(),
    });
    return docRef;
  } catch (error) {
    console.error("Error saving user info: ", error);
    throw error;
  }
};

export default app;

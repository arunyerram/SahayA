// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

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

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyABCXEnYW2HNHM0OVkgJ6pgOUUPJACr_2o",
  // authDomain: "mentalhealth-auth.firebaseapp.com",
  // projectId: "mentalhealth-auth",
  // storageBucket: "mentalhealth-auth.firebasestorage.app",
  // messagingSenderId: "958345997507",
  // appId: "1:958345997507:web:7eb1a8ac9f038515bb0676"


  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);


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


export const deleteTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await deleteDoc(taskDoc);
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};


export const completeTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await updateDoc(taskDoc, { completed: true });
  } catch (error) {
    console.error("Error completing task: ", error);
    throw error;
  }
};


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

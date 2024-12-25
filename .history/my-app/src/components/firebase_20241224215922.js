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


// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth=getAuth();
// export const db=getFirestore(app);
// export default app;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

export default app;

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



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration

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

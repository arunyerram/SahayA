// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import "./UserInfoForm.css";
// import Navbar from "./Nav";
// import Footer from "./footer";

// function UserInfoForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!firstName || !lastName || !age || !address) {
//       setErrorMessage("All fields are required.");
//       return;
//     }

//     try {
//       const user = auth.currentUser;
//       if (user) {
//         const userDocRef = doc(db, "Users", user.uid);
//         await setDoc(userDocRef, {
//           firstName,
//           lastName,
//           age,
//           address,
//           email: user.email,
//         });
//         console.log("User information saved successfully!");
//       } else {
//         setErrorMessage("User is not authenticated.");
//       }
//     } catch (error) {
//       console.error("Error saving user data:", error);
//       setErrorMessage("Error saving user data. Please try again.");
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="user-info-container">
//       <div className="user-info-form">
//         <h3>Enter your details</h3>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Age:</label>
//             <input
//               type="number"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Address:</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>
//           <button className="submit-button" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default UserInfoForm;




import React, { useState } from "react";
import { saveUserInfo } from "./Firebase";  // Import the correct saveUserInfo function
import "./UserInfoForm.css";
// import Footer from "./Footer"; // Import the Footer component
import Navbar from "./Nav";
function UserInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!firstName || !lastName || !age || !address) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      // Call the function to save user data to Firestore
      await saveUserInfo(firstName, lastName, age, address);
      setSuccessMessage("User information saved successfully!");
    //   alert("User information saved successfully!");
    //   Clear the form after successful submission
      setFirstName("");
      setLastName("");
      setAge("");
      setAddress("");
    } catch (error) {
      setErrorMessage("Error saving user data. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    {/* <h1>Enter your details</h1> */}
    <div className="user-info-container">
    <h1>Enter your details</h1>
      <div className="user-info-form">
        {/* <h3>Enter your details</h3> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default UserInfoForm;

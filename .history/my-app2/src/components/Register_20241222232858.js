// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./Firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import "./Login.css";
// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("User Registered: ", user);

//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           photo: "",
//         });
//       }

//       toast.success("User Registered Successfully!", {
//         position: "top-center",
//       });

//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Registration Error: ", error.message);
//       toast.error("Registration failed: " + error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleRegister}>
//           <h3><b>Sign Up</b></h3>

//           <div className="mb-3">
//             <b><label htmlFor="firstName">First Name</label></b>
//             <input
//               type="text"
//               id="firstName"
//               className="form-control"
//               placeholder="First name"
//               value={fname}
//               onChange={(e) => setFname(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="lastName">Last Name</label></b>
//             <input
//               type="text"
//               id="lastName"
//               className="form-control"
//               placeholder="Last name"
//               value={lname}
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="email">Email Address</label></b>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="password">Password</label></b>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <b><button type="submit" className="btn btn-primary">
//               Sign Up
//             </button></b>
//           </div>
//           <b><p className="forgot-password text-right mt-10 font-size: 100px">
//             Already registered? <a href="/login">Login</a>
//           </p>
//           </b>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;



import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Login.css"; // Make sure the CSS file is imported

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User Registered: ", user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }

      toast.success("User Registered Successfully!", {
        position: "top-center",
      });

      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Registration Error: ", error.message);
      toast.error("Registration failed: " + error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="auth-wrapper">
      {/* Icon/Image container */}
      <div className="icon-container">
        <img src={require('../images/SahayA.png')} alt="icon" />
      </div>

      <div className="auth-inner">
        <form onSubmit={handleRegister}>
          <h3><b>Sign Up</b></h3>

          <div className="mb-3">
            <b><label htmlFor="firstName">First Name</label></b>
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <b><label htmlFor="lastName">Last Name</label></b>
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <b><label htmlFor="email">Email Address</label></b>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <b><label htmlFor="password">Password</label></b>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <b><button type="submit" className="btn btn-primary">
              Sign Up
            </button></b>
          </div>

          <b><p className="forgot-password text-right mt-10 font-size: 100px">
            Already registered? <a href="/login">Login</a>
          </p></b>
        </form>
      </div>
    </div>
  );
}

export default Register;

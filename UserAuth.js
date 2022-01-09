// import React,{useState} from 'react'
// //import {auth} from './firebase.js';
// import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyDWnwAXKt0nn6kBhVXnK2-Yt47ugQl5Rl4",
//     authDomain: "authentication2-910d3.firebaseapp.com",
//     projectId: "authentication2-910d3",
//     storageBucket: "authentication2-910d3.appspot.com",
//     messagingSenderId: "517726342572",
//     appId: "1:517726342572:web:0b6263d7eb0ec66b06fe09",
//     measurementId: "G-74WLFS9G19"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   const auth = firebase.auth();

//   export {auth};
//   export default db;
  

// const UserAuth = () => {
//     const [data,setData] = useState({
//         email:"",
//         password:""
//     })
//     const {email,password} = data;
//     const changeHandler = e =>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     const signUp = e =>{
//         e.preventDefault();
//         auth.createUserWithEmailAndPassword(email,password).then(
//             user => console.log(user)
//             ).catch(err => console.log(err))
//     }
//     const signIn = e =>{
//         e.preventDefault();
//         auth.signInWithEmailAndPassword(email,password).then(
//             user => console.log(user)
//             ).catch(err => console.log(err))
//     }
//     return (
//         <div>
//             <center>
//                 <form autoComplete="off">
//                     <h1>Authentication</h1>
//                     <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br />
//                     <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br />
//                     <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
//                     <button onClick={signUp}>Sign Up</button>
//                 </form>
//             </center>
//         </div>
//     )
// }

// export default UserAuth;
import './App.css';
import React, { Component } from 'react';
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDWnwAXKt0nn6kBhVXnK2-Yt47ugQl5Rl4",
    authDomain: "authentication2-910d3.firebaseapp.com",
    projectId: "authentication2-910d3",
    storageBucket: "authentication2-910d3.appspot.com",
    messagingSenderId: "517726342572",
    appId: "1:517726342572:web:0b6263d7eb0ec66b06fe09",
    measurementId: "G-74WLFS9G19"
  };
  // Initialize Firebase   
firebase.initializeApp(firebaseConfig)

class Authen extends Component {
    logout() {
        firebase.auth().signOut();
        var lout=document.getElementById('logout')
            lout.classList.add('hide')
    } 
    google() {
        console.log('i am log in via google')
        var provider=new firebase.auth.GoogleAuthProvider();
        var promise=firebase.auth.signInWithPopup(provider)
        promise.then(result => {
            var user=result.user;
            console.log(user)
            firebase.database().ref('users/'+user.uid).set({
                email:user.email,
                name:user.displayName
            })
        })
        promise.catch(e => {
            var msg = e.message;
            console.log(msg)
        })
    }

    login(events) {
        const email=this.refs.email.value;
        const password= this.refs.password.value;
        console.log(email,password)

        const auth=firebase.auth()
        const promise= auth.signInWithEmailAndPassword(email,password);
        promise.then(user => {
            var lout=document.getElementById('logout')
            lout.classList.remove('hide')
        })
        promise.catch(e => {
                 var err=e.message 
                 console.log(err)
                 this.setState({err:err})
        })

    } 
    signup() {
        const email=this.refs.email.value;
        const password= this.refs.password.value;
        console.log(email,password)

        const auth=firebase.auth()
        const promise= auth.createUserWithEmailAndPassword(email,password);

        promise.then(user => {
            var err='welcome'+user.email;
            firebase.database().ref('/mahiboob'+user).set({
                email:user.email
            })
            console.log(user)
            this.setState({err:err})
           
        })
        promise.catch(e => {
            var err=e.message
            console.log(err)
            this.setState({err:err})
        
    })
    
}

    constructor(props) {
        super(props);
        this.state={
            err:''
        };
        this.login=this.login.bind(this)
        this.signup=this.signup.bind(this)
        this.logout=this.logout.bind(this)
        this.google=this.google.bind(this)

    }

    render() {
        return(
            <div>
             <h1>Authentication</h1>
                <input id='email' ref='email' type='email' placeholder='enter your email' /><br/>
                <input id='password' ref='password' type='password' placeholder='enter your password' /><br />
                <p>{this.state.err}</p>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Sign UP </button>
                <button id="logout" className="hide" onClick={this.logout}>Logout</button>
                <button id='google' className='google' onClick={this.google}>sign in with google</button>
            </div>
        )
    }
}
export default Authen;


 
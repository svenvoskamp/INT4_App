import "firebase/auth";
import * as firebase from "firebase/app";

var provider = new firebase.auth.GoogleAuthProvider();

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(user => onAuthStateChanged(user));
  }


  signInWithPopup = async () => {
    try {
    const result = firebase.auth().signInWithPopup(provider);
    return result;
    } catch(error) {
        console.log(error);
    };
  }

  logout = async () => {
    try {
      const result = await firebase.auth().signOut();
      return result;
    }catch(error) {
      console.log(error);
      };
    };
  }


export default AuthService;

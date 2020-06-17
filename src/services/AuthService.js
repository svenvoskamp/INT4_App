import "firebase/auth";
import * as firebase from "firebase/app";

var provider = new firebase.auth.GoogleAuthProvider();

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(user => onAuthStateChanged(user));
  }

  isRegistered = async email => {
    const signInMethods =  await this.auth.fetchSignInMethodsForEmail(email);
    return signInMethods.length === 0 ? false : true;
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

    signInWithEmailAndPassword = async (email, password) => {
      try {
        const result =  await this.auth.signInWithEmailAndPassword(email, password);
        return result;
    }
    catch (error) {
        return error.code;
    }
  };


  }


export default AuthService;

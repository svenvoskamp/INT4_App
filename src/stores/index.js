import * as firebase from "firebase/app";
import UiStore from "./UiStore";
import BookingStore from "./BookingStore";
import UserStore from "./UserStore";
import TypeStore from "./TypeStore";
import CountryStore from "./CountryStore";



class RootStore {
  constructor() {
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId
    };
    // Initialize Firebase
    this.firebase = firebase.initializeApp(firebaseConfig);
    this.bookingStore = new BookingStore(this);
    this.countryStore = new CountryStore(this);
    this.userStore = new UserStore(this);
    this.countryStore.getCountries();
    this.typeStore = new TypeStore(this);
    this.typeStore.getTypes();
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;

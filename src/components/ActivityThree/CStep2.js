import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import * as firebase from "firebase/app";
import { useStores } from "../../hooks/index";
import 'firebase/storage';


const CStep2 = () => {
  const {uiStore}= useStores();
  const currentBooking = uiStore.currentBooking;

  const storageRef = firebase.storage().ref();
  storageRef.child('images/' + currentBooking.img).getDownloadURL().then(function(url){
    const img = document.getElementById('img');
    img.src = url;
  });
  return (
    <>
    <h1>Dag 3 : Hercreer foto Stap 2 </h1>
    <img id = "img" width = "300" height = "300" src = "" alt = ""/>
    <NavLink exact strict to="/cstep1">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/cstep3">
        <button>Ga naar stap 2</button>
    </NavLink>
    </>
  );
};

export default CStep2;

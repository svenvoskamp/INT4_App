import React, { useState, useRef, useCallback } from "react";
import { useHistory, NavLink } from "react-router-dom";
import * as firebase from "firebase/app";
import { useStores } from "../../hooks/index";
import 'firebase/storage';
import Webcam from "react-webcam";


const CStep2 = () => {
  const {uiStore}= useStores();
  const currentBooking = uiStore.currentBooking;
  const [imgSrc, setImgSrc] = useState("");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const webcamRef = useRef(null);

  const storageRef = firebase.storage().ref();
  storageRef.child('images/' + currentBooking.img).getDownloadURL().then(function(url){
    const img = document.getElementById('img');
    img.src = url;
  });
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    },
    [webcamRef]
  );
  return (
    <>
    <h1>Dag 3 : Hercreer foto Stap 2 </h1>
    <img id = "img" width = "300" height = "300" src = "" alt = ""/>
    {imgSrc === "" && (
    <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    )}
       <button onClick={capture}>Capture photo</button>
       {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
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

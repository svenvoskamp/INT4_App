import React, { useState, useRef, useCallback } from "react";
import { useHistory, NavLink } from "react-router-dom";
import * as firebase from "firebase/app";
import { useStores } from "../../hooks/index";
import 'firebase/storage';
import Webcam from "react-webcam";
import style from "./cstep2.module.css";


const CStep2 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentBooking = uiStore.currentBooking;
  const [imgSrc, setImgSrc] = useState("");
  const videoConstraints = {
    width: 280,
    height: 120,
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
      <div className = {`container container_twee_1_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/cstep1">
              <img src="/assets/buttons/back_white.svg" />
            </NavLink>
          </div>
          <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
            <img src="/assets/buttons/quit_white.svg" />
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Dag 3 : Hercreer foto Stap 2 </h1>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Een foto zegt meer dan 1000 woorden"</p>
              </div> 
            </div>
          </div>
          <div className={style.info}>
          <img id = "img" width = "300" height = "300" src = "" alt = ""/>
          {imgSrc === "" && (
          <Webcam
              audio={false}
              height={120}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={280}
              videoConstraints={videoConstraints}
            />
          )}
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
              <img
                src={imgSrc}
              />
            )}
          </div>
        </div>
          <NavLink className={style.button_container} exact strict to="/cstep3">
            <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
      </div>
    </>
  );
};


export default CStep2;

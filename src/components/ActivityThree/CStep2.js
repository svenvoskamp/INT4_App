import React, { useState, useRef, useCallback } from "react";
import { useHistory, NavLink } from "react-router-dom";
import * as firebase from "firebase/app";
import { useStores } from "../../hooks/index";
import 'firebase/storage';
import Webcam from "react-webcam";
import style from "./cstep2.module.css";
import { ROUTES } from "../../consts";


const CStep2 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const history = useHistory();
  const currentBooking = uiStore.currentBooking;
  const [imgSrc, setImgSrc] = useState("");
  console.log(imgSrc);
  const videoConstraints = {
    width: 280,
    height: 120,
    facingMode: "user"
  };

  const handleOnClick = () => {
    uiStore.setCurrentDay(4);
    history.push(ROUTES.end);
  }

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
            {imgSrc === "" && (
              <h1 className={style.header_title}>Hercreëer jullie oude foto!</h1>
            )}
              {imgSrc && (
               <h1 className={style.header_title}>Jullie zijn aardig veranderd!</h1>
            )}
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Een foto zegt meer dan 1000 woorden"</p>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.polaroid_container}>
              <img id = "img" className = {style.polaroid_image_left} src = "" alt = ""/>
              <img className={style.content_polaroid} src="/assets/images/polaroid_left.png" alt="polaroid" />
            </div>
            <div>
              <Webcam className={style.polaroid_wabcam} audio={false} height={200} ref={webcamRef} screenshotFormat="image/jpeg" width={200} videoConstraints={videoConstraints} />
              {imgSrc === "" && (
              <button onClick={capture}>Maak de foto!</button>
              )}
              {imgSrc && (
              <button onClick={capture}>Maak hem nog een keer!</button>
              )}
            </div>
            <div className={style.polaroid_container}>
              {imgSrc && (
                <img src={imgSrc} className = {style.polaroid_image_right} />
              )}
              <img className={style.content_polaroid} src="/assets/images/polaroid_right.png" alt="polaroid" />
            </div>
          </div>
          <div className={style.button_container}>
            {imgSrc === "" && (
              <div>
              <p>Wij zullen jullie deze foto bezorgen na jullie reis!</p>
              <button className={style.button}>Maak eerst een foto</button>
            </div>
              )}
            {imgSrc && (
              <div>
                <p>Wij zullen jullie deze foto bezorgen na jullie reis!</p>
                <button className={style.button} onClick = {handleOnClick}>Perfect!</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default CStep2;

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
  const [makePic, setMakePic] = useState(false);
  const [text, setText] =useState("Een foto zegt meer dan 1000 woorden");
  console.log(imgSrc);

  const startPhoto = () => {
    setMakePic(true);
  }


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
      setMakePic(false);
      setText("Wij zullen jullie deze foto later opsturen!");
    },
    [webcamRef]
  );
  return (
    <>
      <div className = {`welcome container_twee_1_${type}`}>
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
                <p className={style.subtitle}>{text}</p>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.polaroid_container}>
              <img id = "img" className = {style.polaroid_image_left} src = "" alt = ""/>
              <img className={style.content_polaroid} src="/assets/images/polaroid_left.png" alt="polaroid" />
            </div>
            <div className={style.camera_container}>
              {makePic === true && (
                <>
              <Webcam className={style.camera} audio={false} height={1024} ref={webcamRef} screenshotFormat="image/jpeg" width={1366}  />
              <div className={style.camera_button_container}>
                <img src="/assets/images/camera_button.svg" className={style.test} onClick={capture} />
              </div>
              </>
              )}
            </div>
            <div className={style.make_image}>
              {makePic === false && (
              <img onClick = {startPhoto} src="/assets/images/camera_button.svg" />
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
            {imgSrc && (
              <div>
                <button className={`${type === "ontspanning" ? style.button_ontspanning : type === "avontuurlijk" ? style.button_adventure : type === "cultuur" ? style.button_cultuur : ""}`} onClick = {handleOnClick}>Perfect!</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default CStep2;

import React from "react";
import { useStores } from "../../hooks/index";
import {NavLink } from "react-router-dom";
import style from "./step4.module.css";

const Step4 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(4);
  const pants = uiStore.currentBooking.pants;
  let user;
  if(pants === "0" || pants === "1"){
    user = uiStore.currentBooking.name1;
  }else {
    user = uiStore.currentBooking.name2;
  }
  return (
    <>
      <div className = {`container container_een_4_${type}`}>
      <div className="navigation">
        <div className="navigation_back">
          <NavLink exact strict to="/step3">
            <img src="/assets/buttons/back_white.svg" alt ="back" />
          </NavLink>
        </div>
        <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
              <img src="/assets/buttons/quit_white.svg" alt ="quit" />
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>{currentStep.title} {user}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div>
            </div>
            <div className={style.info}>
              <p className={style.text}>{currentStep.text1}</p>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/step5">
            <img src="/assets/buttons/arrow_white.svg" alt ="arrow" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Step4;

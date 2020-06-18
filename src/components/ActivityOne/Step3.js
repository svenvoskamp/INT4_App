import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step3.module.css";

const Step3 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(3);
  const pants = uiStore.currentBooking.pants;
  let user;
  if(pants === "0" || pants === "1"){
    user = uiStore.currentBooking.name1;
  }else {
    user = uiStore.currentBooking.name2;
  }

  return (
    <>
      <div className = {`container container_een_3_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/step2">
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
              <h1 className={style.header_title}>{user}, {currentStep.title}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div> 
            </div>
            <ul className={style.info}>
              <li className={style.text}>{currentStep.text1}</li>
              <li className={style.text}>{currentStep.text2}</li>
              <li className={style.text}>{currentStep.text3}</li>
            </ul>
          </div>
          <NavLink className={style.button_container} exact strict to="/step4">
            <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Step3;

import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step1.module.css";

const Step1 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(1);

  return (
    <>
      <div className={style.container}>
        <NavLink exact strict to="/dashboard">
          <img src="/assets/buttons/back_white.svg" />
        </NavLink>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div> 
            </div>
          </div>
          <p className={style.text}>{currentStep.text1}</p>
          <NavLink className={style.button_container} exact strict to="/step2">
          <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Step1;

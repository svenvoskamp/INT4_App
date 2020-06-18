import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step5.module.css";

const Step5 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(5);

  return (
    <>
      <div className = {`container container_een_5_${type}`}>
      <div className="navigation">
        <div className="navigation_back">
          <NavLink exact strict to="/step4">
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
              <h1 className={style.header_title}>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}! {currentStep.title}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div> 
            </div>
            <div className={style.info}>
              <p className={style.text}>{currentStep.text1}</p>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/step6">
            <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Step5;

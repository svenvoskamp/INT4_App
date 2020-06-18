import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./step6.module.css";

const Step6 = () => {
  const history = useHistory();
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(6);

  const handleOnClick = () => {
    stepStore.empty();
    uiStore.setCurrentDay(2);
    history.push(ROUTES.dashboard);
  }

  return (
    <>
      <div className = {`container container_een_6_${type}`}>
        <NavLink exact strict to="/step5">
          <img src="/assets/buttons/back_white.svg" />
        </NavLink>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>{currentStep.title}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div> 
            </div>
          </div>
          <p>{currentStep.text1}</p>
          <div className={style.button_container}>
          <button className={style.button} onClick = {handleOnClick}>Terug naar overzicht</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Step6;

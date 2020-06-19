import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./bstep5.module.css";
import { ROUTES } from "../../consts";


const BStep5 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(5);
  const history = useHistory();

  const handleOnClick = () => {
    stepStore.empty();
    uiStore.setCurrentDay(3);
    history.push(ROUTES.dashboard);
  }

  return (
    <>
      <div className = {`container container_twee_5_${type}`}>
        <div className="navigation">
          <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
            <img src="/assets/buttons/quit_white.svg" />
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>{currentStep.title}</h1>
            </div>
            <div className={style.button_container}>
            <button className={style.button} onClick = {handleOnClick}>Terug naar overzicht</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BStep5;

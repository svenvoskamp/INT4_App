import React from "react";
import { useStores } from "../../hooks/index";
import {NavLink } from "react-router-dom";
import style from "./bstep4.module.css";


const BStep4 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(4);

  return (
    <>
      <div className = {`container container_twee_4_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/bstep3">
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
        <audio controls >
          <source src={currentStep.ogg} type="audio/ogg"/>
          <source src={currentStep.mp3} type="audio/mpeg"/>
        </audio>
          <NavLink className={style.button_container} exact strict to="/bstep5">
            <img src="/assets/buttons/arrow_white.svg" alt = "arrow" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BStep4;

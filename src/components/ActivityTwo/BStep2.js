import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./bstep2.module.css";


const BStep2 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(2);

  return (
    <>
      <div className = {`container container_twee_2_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/bstep1">
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
        <audio className={style.audio} controls >
          <source src={currentStep.ogg} type="audio/ogg"/>
          <source src={currentStep.mp3} type="audio/mpeg"/>
        </audio>
          <NavLink className={style.button_container} exact strict to="/bstep3">
            <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BStep2;

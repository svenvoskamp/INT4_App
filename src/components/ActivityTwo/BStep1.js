import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./bstep1.module.css";

const BStep1 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(1);

  return (
    <>
      <div className = {`container container_twee_1_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/dashboard">
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
              <h1 className={style.header_title}>{currentStep.title}</h1>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div> 
            </div>
            <div className={style.info}>
              <div>
                <img className={style.option_image} src={currentStep.img1} />
                <p className={style.bold}>{currentStep.text1}</p>
                <p className={style.text}>{currentStep.extra1}</p>
              </div>
              <div>
                <img className={style.option_image} src={currentStep.img2} />
                <p className={style.bold}>{currentStep.text2}</p>
                <p className={style.text}>{currentStep.extra2}</p>
              </div>
              <div>
                <img className={style.option_image} src={currentStep.img3} />
                <p className={style.bold}>{currentStep.text3}</p>
                <p className={style.text}>{currentStep.extra3}</p>
              </div>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/bstep2">
            <img src="/assets/buttons/arrow_white.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BStep1;

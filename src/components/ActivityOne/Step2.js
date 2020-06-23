import React from "react";
import { useStores } from "../../hooks/index";
import {NavLink } from "react-router-dom";
import style from "./step2.module.css";

const Step2 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(2);
  const pants = uiStore.currentBooking.pants;
  let user;
  if(pants === "1" || pants === "2"){
    user = uiStore.currentBooking.name1;
  }else {
    user = uiStore.currentBooking.name2;
  }

  return (
    <>
      <div className = {`container container_een_2_${type}`}>
      <div className="navigation">
        <div className="navigation_back">
          <NavLink exact strict to="/step1">
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
              <h1 className={style.header_title}>{user}, {currentStep.title}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{currentStep.tagline}"</p>
              </div>
            </div>
            <div className={style.info}>
              <div>
                <picture>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img1}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img1}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text1}</p>
                <p className={style.text}>{currentStep.extra1}</p>
              </div>
              <div>
              <picture>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img2}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img2}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text2}</p>
                <p className={style.text}>{currentStep.extra2}</p>
              </div>
              <div>
                <picture>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img3}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img3}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text3}</p>
                <p className={style.text}>{currentStep.extra3}</p>
              </div>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/step3">
            <img src="/assets/buttons/arrow_white.svg" alt ="arrow" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Step2;

import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import {NavLink } from "react-router-dom";
import style from "./bstep3.module.css";


const BStep3 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(3);

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const handleSelected1 = () => {
    setSelected2(false);
    setSelected3(false);
    setSelected1(true);
  }
  const handleSelected2 = () => {
    setSelected1(false);
    setSelected3(false);
    setSelected2(true);
  }
  const handleSelected3 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(true);
  }

  return (
    <>
      <div className = {`container container_twee_3_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/bstep2">
              <img src="/assets/buttons/back_white.svg" alt ="back" />
            </NavLink>
          </div>
          <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
            <img src="/assets/buttons/quit_white.svg" alt = "quit" />
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
              <picture onClick = {handleSelected1}>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img1}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img1}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text1}</p>
                {selected1 === true && (
                <p className={style.text}>{currentStep.extra1}</p>
                )}
              </div>
              <div>
              <picture onClick = {handleSelected2}>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img2}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img2}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text2}</p>
                {selected2 === true && (
                <p className={style.text}>{currentStep.extra2}</p>
                )}
              </div>
              <div>
              <picture onClick = {handleSelected3}>
                  <source className={style.option_image} type="image/webp" srcSet={`${currentStep.img3}.webp`}/>
                  <img className={style.option_image} src={`${currentStep.img3}.png`} alt="married couple"/>
                </picture>
                <p className={style.bold}>{currentStep.text3}</p>
                {selected3 === true && (
                <p className={style.text}>{currentStep.extra3}</p>
                )}
              </div>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/bstep4">
            <img src="/assets/buttons/arrow_white.svg" alt ="arrow" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BStep3;

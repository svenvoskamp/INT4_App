import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import style from "./onboardingc.module.css";

const OnboardingC = () => {

  return (
    <>
      <div className= "container onboarding onboardingb">
        <div className="navigation">
          <div className="menu">
            <img className="menu_item" src="/assets/buttons/service_black.svg" />
            <img className="menu_item" src="/assets/buttons/time_onboarding.svg" />
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Quality-Time?</h1>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>“We willen jullie alle vrijheid en privacy geven om tijdens jullie verblijf ten volste van elkaar te genieten. Daarom kan je het “niet-storen” embleem te alle tijden aanklikken om zeker te zijn dat je niet gestoord zal worden.”</p>
              </div>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/dashboard">
            <img src="/assets/buttons/arrow_black.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OnboardingC;

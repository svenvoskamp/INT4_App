import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import style from "./onboardingb.module.css";

const OnboardingB = () => {

  return (
    <>
      <div className= "container onboarding onboardingb">
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Service gewenst?</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>“Wanneer jullie drinken of eten wensen te bestellen kunnen jullie op volgend embleem klikken bovenaan. 2 minuten later zullen we aan de deur kloppen om jullie verzoek aan te horen”</p>
              </div>
            </div>
          </div>
          <NavLink className={style.button_container} exact strict to="/onboardingc">
            <img src="/assets/buttons/arrow_black.svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OnboardingB;

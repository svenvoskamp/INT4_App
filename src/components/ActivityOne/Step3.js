import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step3.module.css";

const Step3 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(3);
  const pants = uiStore.currentBooking.pants;
  let user;
  if(pants === "0" || pants === "1"){
    user = uiStore.currentBooking.name1;
  }else {
    user = uiStore.currentBooking.name2;
  }

  return (
    <>
    <h1>{user}, {currentStep.title}</h1>
    <h2>{currentStep.tagline}</h2>
    <ul>
    <li>{currentStep.text1}</li>
    <li>{currentStep.text2}</li>
    <li>{currentStep.text3}</li>
    </ul>

    <NavLink exact strict to="/step2">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step4">
        <button>Ga naar stap 4</button>
    </NavLink>
    </>
  );
};

export default Step3;

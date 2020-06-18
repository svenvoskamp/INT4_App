import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step2.module.css";

const Step2 = () => {
  const { uiStore, stepStore} = useStores();
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
    <h1>{user}, {currentStep.title}</h1>
    <h2>{currentStep.tagline}</h2>
    <NavLink exact strict to="/step1">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step3">
        <button>Ga naar stap 3</button>
    </NavLink>
    </>
  );
};

export default Step2;

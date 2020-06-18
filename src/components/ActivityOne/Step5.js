import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import style from "./step5.module.css";

const Step5 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(5);

  return (
    <>
    <h1>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}! {currentStep.title}</h1>
    <h2>{currentStep.tagline}</h2>
    <p>{currentStep.text1}</p>
    <NavLink exact strict to="/step4">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step6">
        <button>Ga naar stap 6</button>
    </NavLink>
    </>
  );
};

export default Step5;

import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step4 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(4);
  const pants = uiStore.currentBooking.pants;
  let user;
  if(pants === "0" || pants === "1"){
    user = uiStore.currentBooking.name1;
  }else {
    user = uiStore.currentBooking.name2;
  }
  return (
    <>
    <h1>{currentStep.title} {user}</h1>
    <h2>{currentStep.tagline}</h2>
    <p>{currentStep.text1}</p>
    <NavLink exact strict to="/step3">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step5">
        <button>Ga naar stap 5</button>
    </NavLink>
    </>
  );
};

export default Step4;

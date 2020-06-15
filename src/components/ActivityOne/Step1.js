import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step1 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(1);

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/dashboard">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step2">
        <button>Ga naar stap 2</button>
    </NavLink>
    </>
  );
};

export default Step1;

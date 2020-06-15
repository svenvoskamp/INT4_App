import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step2 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(2);

  return (
    <>
    <h1>{currentStep.title}</h1>
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

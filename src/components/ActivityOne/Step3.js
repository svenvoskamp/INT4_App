import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step3 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(3);

  return (
    <>
    <h1>{currentStep.title}</h1>
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

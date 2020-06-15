import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step4 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(4);

  return (
    <>
    <h1>{currentStep.title}</h1>
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

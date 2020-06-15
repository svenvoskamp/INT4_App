import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const Step6 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(6);

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/step5">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/step7">
        <button>Ga naar stap 7</button>
    </NavLink>
    </>
  );
};

export default Step6;

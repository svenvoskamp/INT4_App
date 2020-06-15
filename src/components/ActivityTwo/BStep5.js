import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const BStep5 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(5);

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/bstep4">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/bstep6">
        <button>Ga naar stap 6</button>
    </NavLink>
    </>
  );
};

export default BStep5;

import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";

const BStep4 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(4);

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/bstep3">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/bstep5">
        <button>Ga naar stap 5</button>
    </NavLink>
    </>
  );
};

export default BStep4;

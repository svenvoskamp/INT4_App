import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const Step6 = () => {
  const history = useHistory();
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(6);

  const handleOnClick = () => {
    stepStore.empty();
    uiStore.setCurrentDay(2);
    history.push(ROUTES.dashboard);
  }

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/step5">
        <button>Ga terug</button>
    </NavLink>

    <button onClick = {handleOnClick}>Terug naar overzicht</button>
    </>
  );
};

export default Step6;

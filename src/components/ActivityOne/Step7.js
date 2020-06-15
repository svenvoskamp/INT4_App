import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";


const Step7 = () => {
  const { uiStore, stepStore} = useStores();
  const currentStep = stepStore.getStepByCurrentStep(7);

  const history = useHistory();

  const handleOnClick = () => {
    stepStore.empty();
    uiStore.setCurrentDay(2);
    history.push(ROUTES.dashboard);
  }

  return (
    <>
    <h1>{currentStep.title}</h1>
    <NavLink exact strict to="/step6">
        <button>Ga terug</button>
    </NavLink>


        <button onClick = {handleOnClick}>Terug naar overzicht</button>



    </>
  );
};

export default Step7;

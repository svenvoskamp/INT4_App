import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const CStep1 = () => {
  const { uiStore} = useStores();
  const history = useHistory();

  const handleOnClick = () => {
    uiStore.setCurrentDay(4);
    history.push(ROUTES.end);
  }


  return (
    <>
    <h1>Dag 3 : Hercreer foto Stap 3 </h1>
    <NavLink exact strict to="/cstep2">
        <button>Ga terug</button>
    </NavLink>

    <button onClick = {handleOnClick}>Terug naar overzicht</button>
    </>
  );
};

export default CStep1;

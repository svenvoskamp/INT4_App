import React, { useState } from "react";

import { useHistory, NavLink } from "react-router-dom";

const CStep2 = () => {

  return (
    <>
    <h1>Dag 3 : Hercreer foto Stap 2 </h1>
    <NavLink exact strict to="/cstep1">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/cstep3">
        <button>Ga naar stap 2</button>
    </NavLink>
    </>
  );
};

export default CStep2;

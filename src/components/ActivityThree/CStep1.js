import React, { useState } from "react";

import { useHistory, NavLink } from "react-router-dom";

const CStep1 = () => {

  return (
    <>
    <h1>Dag 3 : Hercreer foto Stap 1 </h1>
    <NavLink exact strict to="/dashboard">
        <button>Ga terug</button>
    </NavLink>

    <NavLink exact strict to="/cstep2">
        <button>Ga naar stap 2</button>
    </NavLink>
    </>
  );
};

export default CStep1;

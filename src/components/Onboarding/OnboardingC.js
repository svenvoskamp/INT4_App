import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";


const OnboardingC = () => {



  return (
    <>
      <p>Onboarding : Service gewenst </p>
      <NavLink exact strict to="/dashboard">
          <p>Wij zijn er klaar voor</p>
      </NavLink>
    </>
  );
};

export default OnboardingC;

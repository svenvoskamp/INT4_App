import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";


const OnboardingB = () => {



  return (
    <>
      <p>Onboarding : Niet Storen </p>
      <NavLink   exact strict to="/onboardingc">
          <p>Wij zijn er klaar voor</p>
      </NavLink>
    </>
  );
};

export default OnboardingB;

import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const { uiStore } = useStores();



  return (
    <h1>Welcome</h1>
  );
};

export default Welcome;

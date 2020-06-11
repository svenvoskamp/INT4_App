import React, { useState } from "react";

import { useStores } from "../../hooks/index";

import { useHistory } from "react-router-dom";

const Music = () => {
  const { uiStore } = useStores();



  return (
    <h1>Choose your music</h1>
  );
};

export default Music;

import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./cstep3.module.css";

const CStep1 = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const history = useHistory();

  const handleOnClick = () => {
    uiStore.setCurrentDay(4);
    history.push(ROUTES.end);
  }

  return (
    <>
      <div className = {`container container_twee_1_${type}`}>
        <div className="navigation">
          <div className="navigation_back">
            <NavLink exact strict to="/cstep2">
              <img src="/assets/buttons/back_white.svg" />
            </NavLink>
          </div>
          <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
            <img src="/assets/buttons/quit_white.svg" />
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>De gerecreërde foto!</h1>

            </div>
          </div>
        </div>
        <div className={style.button_container}>
        <button className={style.button} onClick = {handleOnClick}>Het zit erop!</button>
          </div>
      </div>
    </>
  );
};

export default CStep1;

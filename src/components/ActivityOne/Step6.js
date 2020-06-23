import React from "react";
import { useStores } from "../../hooks/index";
import { useHistory, NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./step6.module.css";

const Step6 = () => {
  const history = useHistory();
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const currentStep = stepStore.getStepByCurrentStep(6);

  const handleOnClick = () => {
    uiStore.setActivityOneDone();
    history.push(ROUTES.dashboard);
  }

  return (
    <>
      <div className = {`container container_een_6_${type}`}>
        <div className="navigation">
          <div className="navigation_quit">
            <NavLink exact strict to="/dashboard">
              <img src="/assets/buttons/quit_white.svg" alt ="quit" />
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>{currentStep.title}</h1>
            </div>
            <div className={style.button_container}>
          <button className={`${type === "ontspanning" ? style.button_ontspanning : type === "avontuurlijk" ? style.button_avontuur : type === "cultuur" ? style.button_cultuur : ""}`}  onClick={handleOnClick}>Terug naar overzicht</button>
          </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Step6;

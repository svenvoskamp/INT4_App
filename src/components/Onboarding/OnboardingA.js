import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useStores } from "../../hooks/index";
import style from "./onboardinga.module.css";

const OnboardingA = () => {
  const { uiStore, countryStore, typeStore } = useStores();
  const booking = uiStore.currentBooking;
  const country = countryStore.getCountryById(booking.countryId);
  const type = typeStore.getTypeById(booking.typeId);
  const count = uiStore.currentBooking.count;
  console.log(booking, type, country);
  let journeyType;
  if(type.type === "Ontspanning"){
    journeyType = "ontspannende";
  }
  if(type.type === "Cultuur"){
    journeyType = "culturele";
  }

  if(type.type === "Avontuurlijk"){
    journeyType = "avontuurlijke";
  }

  return (
    <>
      <div className= "welcome onboardinga">
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Zijn jullie klaar voor deze prachtige reis?</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"Jullie zullen een <span className={style.bold}>{journeyType} reis </span> maken door het <span className={style.bold}>prachtige {country.country}</span>". Focus op elkaar en geniet van <span className={style.bold}>intimiteit en relaxatie</span> die jullie zullen beleven.”</p>
              </div>
            </div>
          </div>
            <video className={style.video} width="500" height = "500"  loop playsInline autoPlay muted>
              {type.type === "Ontspanning" &&
              <>
              <source src="../../assets/video/type_relax.webm" type="video/webm"/>
              <source src="../../assets/video/type_relax.mp4" type="video/mp4"/>
              </>
              }
              {type.type === "Avontuurlijk" &&
               <>
              <source src="../../assets/video/type_adventure.webm" type="video/webm"/>
              <source src="../../assets/video/type_adventure.mp4" type="video/mp4"/>
              </>
              }
               {type.type === "Cultuur" &&
               <>
               <source src="../../assets/video/type_culture.webm" type="video/webm"/>
              <source src="../../assets/video/type_culture.mp4" type="video/mp4"/>
              </>
              }
            </video>
          <NavLink className={style.button_container}  exact strict to="/onboardingb">
          <p className={style.button}>Wij zijn er klaar voor</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OnboardingA;

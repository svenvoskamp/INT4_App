import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useStores } from "../../hooks/index";
import style from "./welcome.module.css";

const Welcome = () => {
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
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Proficiat met jullie {booking.count}-jarige jubileum! {booking.name1} & {booking.name2} </h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"Jullie zullen een {journeyType} reis maken door het prachtige {country.country}"</p>
              </div>
            </div>
          </div>
            <video className={style.video} width="500" height = "500"  loop playsInline autoPlay muted>
              {count >= 0 && count <= 14 &&
              <>
              <source src="/assets/video/ring_silver.webm" type="video/webm"/>
              <source src="/assets/video/ring_silver.mp4" type="video/mp4"/>
              </>
              }
              {count >= 15 && count <= 29 &&
               <>
              <source src="/assets/video/ring_gold.webm" type="video/webm"/>
              <source src="/assets/video/ring_gold.mp4" type="video/mp4"/>
              </>
              }
              {count >= 29 && count <= 44 &&
              <>
              <source src="/assets/video/ring_diamond.webm" type="video/webm"/>
              <source src="/assets/video/ring_diamond.mp4" type="video/mp4"/>
              </>
              }
              {count >= 44 && count <= 60 &&
              <>
              <source src="/assets/video/ring_pearl.webm" type="video/webm"/>
              <source src="/assets/video/ring_pearl.mp4" type="video/mp4"/>
              </>
              }
            </video>
          <NavLink className={style.button_container}  exact strict to="/dashboard">
          <p className={style.button}>Wij zijn er klaar voor</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Welcome;

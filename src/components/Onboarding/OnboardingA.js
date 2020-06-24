import React from "react";
import {NavLink } from "react-router-dom";
import { useStores } from "../../hooks/index";
import style from "./onboardinga.module.css";

const OnboardingA = () => {
  const { uiStore, countryStore, typeStore } = useStores();
  const booking = uiStore.currentBooking;
  const country = countryStore.getCountryById(booking.countryId);
  const type = typeStore.getTypeById(booking.typeId);
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

  let journeyDetails;
  if(type.type === "Ontspanning"){
    journeyDetails = "intimiteit en relaxatie";
  }
  if(type.type === "Cultuur"){
    journeyDetails = "tradities en gewoontes";
  }

  if(type.type === "Avontuurlijk"){
    journeyDetails = "spanning en sensatie";
  }

  return (
    <>
      <div className= "welcome onboardinga">
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Zijn jullie klaar voor deze prachtige reis?</h1>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Jullie zullen een <span className={style.bold}>{journeyType} reis </span> maken door het <span className={style.bold}>prachtige {country.country}</span>". Focus op elkaar en geniet van <span className={style.bold}>{journeyDetails}</span> die jullie zullen beleven.”</p>
              </div>
            </div>
          </div>
            <video className={style.video} width="450" height = "450"  loop playsInline autoPlay muted>
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
            <div>
            <div className={style.onboard_flow}>
              <div className={style.flow}>
                <img className={style.flow_icon} src="/assets/buttons/bol_full.svg" alt ="bol" />
                <img className={style.flow_icon} src="/assets/buttons/bol_outline.svg" alt ="bol" />
                <img className={style.flow_icon} src="/assets/buttons/bol_outline.svg" alt ="bol" />
              </div>
              <NavLink className={style.button_container} exact strict to="/onboardingb">
                <img src="/assets/buttons/arrow_black.svg" alt ="arrow" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingA;

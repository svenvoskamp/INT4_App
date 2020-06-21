import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import style from "./dashboard.module.css";

const Dashboard = () => {

  const { uiStore, activityStore, stepStore, countryStore, typeStore } = useStores();
  const booking = uiStore.currentBooking;
  const type = typeStore.getTypeById(booking.typeId);
  const typeName = type.type.toLowerCase();
  const day = uiStore.currentDay;
  const country = countryStore.getCountryById(uiStore.currentBooking.countryId);
  if(day === 1 || day === 2){
  const currentDayActivities = activityStore.getActivitiesForCurrentDay(uiStore.currentBooking.typeId, uiStore.currentBooking.countryId, day);
  console.log(currentDayActivities);
  const activeCurrentDayActivity = activityStore.getActiveCurrentDayActivity(currentDayActivities);
  console.log(activeCurrentDayActivity);
  stepStore.getStepsForActivity(activeCurrentDayActivity.id);

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

  const handleNextDay = () => {
    stepStore.empty();
    uiStore.setCurrentDay(uiStore.currentDay + 1);
  }

  return (
    <>
      <div className = "dashboard">
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <div className={style.header_profile}>
                <img className={style.header_logo} src= {`${typeName === "ontspanning" ? "/assets/images/halo_blue.svg" : typeName === "avontuurlijk" ? "/assets/images/halo_purple.svg" : typeName === "cultuur" ? "/assets/images/halo_orange.svg"  : ""}`}/>
                <h1 className={`${typeName === "ontspanning" ? style.title_blue : typeName === "avontuurlijk" ? style.title_purple : typeName === "cultuur" ? style.title_orange: ""}`}>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}</h1>
              </div>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Dag {uiStore.currentDay} van jullie <span className={style.bold}>{journeyType} </span>reis in {country.country}"</p>
              </div>            
              <div className={style.options}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30.9375C20.3291 30.9375 24.0013 29.4164 26.7088 26.7088C29.4164 24.0013 30.9375 20.3291 30.9375 16.5C30.9375 12.6709 29.4164 8.9987 26.7088 6.29114C24.0013 3.58359 20.3291 2.0625 16.5 2.0625C12.6709 2.0625 8.9987 3.58359 6.29114 6.29114C3.58359 8.9987 2.0625 12.6709 2.0625 16.5C2.0625 20.3291 3.58359 24.0013 6.29114 26.7088C8.9987 29.4164 12.6709 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33Z" fill="#424242"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7542 6.0053L6.62926 28.1302L4.86816 26.3691L26.9931 4.24421L28.7542 6.0053Z" fill="#424242"/>
                </svg>
                <p className={style.option_text}>Quality-Time</p>
              </div>
              <div className={style.options}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30.9375C20.3291 30.9375 24.0013 29.4164 26.7088 26.7088C29.4164 24.0013 30.9375 20.3291 30.9375 16.5C30.9375 12.6709 29.4164 8.9987 26.7088 6.29114C24.0013 3.58359 20.3291 2.0625 16.5 2.0625C12.6709 2.0625 8.9987 3.58359 6.29114 6.29114C3.58359 8.9987 2.0625 12.6709 2.0625 16.5C2.0625 20.3291 3.58359 24.0013 6.29114 26.7088C8.9987 29.4164 12.6709 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33Z" fill="#424242"/>
                  <path d="M16.4998 8.71484C17.0117 8.71484 17.5027 8.91164 17.8647 9.26195C18.2266 9.61225 18.43 10.0874 18.43 10.5828C18.43 10.8069 18.3914 11.0217 18.3142 11.2272C22.2421 11.9837 25.1857 15.1685 25.1857 18.9884H7.81397C7.81397 15.1685 10.7575 11.9837 14.6854 11.2272C14.6082 11.0217 14.5696 10.8069 14.5696 10.5828C14.5696 10.0874 14.773 9.61225 15.135 9.26195C15.4969 8.91164 15.9879 8.71484 16.4998 8.71484ZM26.1508 21.7903H6.84888V19.9224H26.1508V21.7903ZM16.4998 12.9177C13.4984 12.9177 10.9505 14.6829 10.0723 17.1205H22.9273C22.0491 14.6829 19.5013 12.9177 16.4998 12.9177Z" fill="#424242"/>
                </svg>
                <p className={style.option_text}>Service</p>
              </div>
            </div>

            <div className={style.next_container}>
              {day === 1 && (
                <div className={style.next_flex} onClick = {handleNextDay}>
                  <p className={style.next} >Volgende dag</p>
                  <img src="/assets/images/next_day.svg" />
                </div>
                )}
                {day === 2 && (
                <div className={style.next_flex} onClick = {handleNextDay}>
                  <p className={style.next} >Volgende dag</p>
                  <img src="/assets/images/next_day.svg" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={style.info}>
              {currentDayActivities.map(activity => (
                <div className={style.activity}>
                  <picture className={style.option_image} key={activity.id}>
                    <source className={style.option_image} type="image/webp" srcSet={`${activity.img}.webp`}/>
                    <img className={style.option_image} src={`${activity.img}.png`} alt="activity"/>
                  </picture>
                  <div className={style.button_container}>
                    {day === 1 &&
                    <NavLink exact strict to="/step1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>Ga naar de activiteit</p>
                    </NavLink>
                    }
                    {day === 2 &&
                    <NavLink exact strict to="/bstep1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>Ga naar de activiteit</p>
                    </NavLink>
                    }
                  </div>
                </div>
              ))
              }
            </div>
      </div>
    </>
  );
  }
  else {

    return (
      <>
      <div className = "dashboard">
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <div className={style.header_profile}>
                <img className={style.header_logo} src= {`${typeName === "ontspanning" ? "/assets/images/halo_blue.svg" : typeName === "avontuurlijk" ? "/assets/images/halo_purple.svg" : typeName === "cultuur" ? "/assets/images/halo_orange.svg"  : ""}`}/>
                <h1 className={`${typeName === "ontspanning" ? style.title_blue : typeName === "avontuurlijk" ? style.title_purple : typeName === "cultuur" ? style.title_orange: ""}`}>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}</h1>
              </div>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Dag {uiStore.currentDay} van jullie <span className={style.bold}>... </span>reis in {country.country}"</p>
              </div>            
              <div className={style.options}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30.9375C20.3291 30.9375 24.0013 29.4164 26.7088 26.7088C29.4164 24.0013 30.9375 20.3291 30.9375 16.5C30.9375 12.6709 29.4164 8.9987 26.7088 6.29114C24.0013 3.58359 20.3291 2.0625 16.5 2.0625C12.6709 2.0625 8.9987 3.58359 6.29114 6.29114C3.58359 8.9987 2.0625 12.6709 2.0625 16.5C2.0625 20.3291 3.58359 24.0013 6.29114 26.7088C8.9987 29.4164 12.6709 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33Z" fill="#424242"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7542 6.0053L6.62926 28.1302L4.86816 26.3691L26.9931 4.24421L28.7542 6.0053Z" fill="#424242"/>
                </svg>
                <p className={style.option_text}>Quality-Time</p>
              </div>
              <div className={style.options}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 30.9375C20.3291 30.9375 24.0013 29.4164 26.7088 26.7088C29.4164 24.0013 30.9375 20.3291 30.9375 16.5C30.9375 12.6709 29.4164 8.9987 26.7088 6.29114C24.0013 3.58359 20.3291 2.0625 16.5 2.0625C12.6709 2.0625 8.9987 3.58359 6.29114 6.29114C3.58359 8.9987 2.0625 12.6709 2.0625 16.5C2.0625 20.3291 3.58359 24.0013 6.29114 26.7088C8.9987 29.4164 12.6709 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33Z" fill="#424242"/>
                  <path d="M16.4998 8.71484C17.0117 8.71484 17.5027 8.91164 17.8647 9.26195C18.2266 9.61225 18.43 10.0874 18.43 10.5828C18.43 10.8069 18.3914 11.0217 18.3142 11.2272C22.2421 11.9837 25.1857 15.1685 25.1857 18.9884H7.81397C7.81397 15.1685 10.7575 11.9837 14.6854 11.2272C14.6082 11.0217 14.5696 10.8069 14.5696 10.5828C14.5696 10.0874 14.773 9.61225 15.135 9.26195C15.4969 8.91164 15.9879 8.71484 16.4998 8.71484ZM26.1508 21.7903H6.84888V19.9224H26.1508V21.7903ZM16.4998 12.9177C13.4984 12.9177 10.9505 14.6829 10.0723 17.1205H22.9273C22.0491 14.6829 19.5013 12.9177 16.4998 12.9177Z" fill="#424242"/>
                </svg>
                <p className={style.option_text}>Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.info}> 
                <div className={style.activity}>
                  <picture className={style.option_image} >
                    <source className={style.option_image} type="image/webp" srcSet="/assets/images/polaroid.webp"/>
                    <img className={style.option_image} src="assets/images/polaroid.png" alt="activity"/>
                  </picture>
                  <div className={style.button_container}>
                    <NavLink exact strict to="/cstep1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>Ga naar de activiteit</p>
                    </NavLink>
                  </div>
                </div>
            </div>
      </div>
    </>
  );
  }
};

export default Dashboard;

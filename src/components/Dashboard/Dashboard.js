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
  const [timeChecked, setTimeChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);


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

  const handleTimeCheck = () => {
    setTimeChecked(true);
  }
  const handleTimeUncheck = () => {
    setTimeChecked(false);
  }

  const handleServiceCheck = () => {
    setServiceChecked(true);
  }

  const handleServiceUncheck = () => {
    setServiceChecked(false);
  }

  if(day === 1 || day === 2){
    const currentDayActivities = activityStore.getActivitiesForCurrentDay(uiStore.currentBooking.typeId, uiStore.currentBooking.countryId, day);
    const currentDayActivitiesDisabled = currentDayActivities.filter(activity => activity.active === false);
    const activeCurrentDayActivity = activityStore.getActiveCurrentDayActivity(currentDayActivities);
    stepStore.getStepsForActivity(activeCurrentDayActivity.id);

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


              {type.type === "Avontuurlijk" && timeChecked === false && (
              <label  onClick = {handleTimeCheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_purple_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Avontuurlijk" && timeChecked === true && (
              <label onClick = {handleTimeUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_purple.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}

              {type.type === "Ontspanning" && timeChecked === false && (
              <label  onClick = {handleTimeCheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_blue_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Ontspanning" && timeChecked === true && (
              <label onClick = {handleTimeUncheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_blue.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && timeChecked === false && (
              <label onClick = {handleTimeCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_orange_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && timeChecked === true && (
              <label onClick = {handleTimeUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_orange.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}


              {type.type === "Avontuurlijk" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_purple_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

              {type.type === "Avontuurlijk" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_purple.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}

                {type.type === "Cultuur" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_orange_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_orange.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}

                {type.type === "Ontspanning" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_blue_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

               {type.type === "Ontspanning" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_blue.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}






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
              {currentDayActivitiesDisabled.map(activity => (
                <div className={style.activity} key = {activity.id}>
                  <picture className={style.image_container} key={activity.id}>
                    <source className={style.option_image} type="image/webp" srcSet={`${activity.img}.webp`}/>
                    <img className={style.option_image} src={`${activity.img}.png`} alt="activity"/>
                  </picture>
                  <div className={style.button_container}>
                        <p className={ `${style.button_opacity} ${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>{activity.title}</p>
                  </div>
                </div>
              ))
              }
               <div className={style.activity}>
                  <picture className={style.image_container}  key={activeCurrentDayActivity.id}>
                    <source className={style.option_image} type="image/webp" srcSet={`${activeCurrentDayActivity.img}.webp`}/>
                    <img className={style.option_image} src={`${activeCurrentDayActivity.img}.png`} alt="activity"/>
                  </picture>
                  <div className={style.button_container}>
                    {day === 1 && uiStore.activityOneDone === false &&
                    <NavLink exact strict to="/step1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>{activeCurrentDayActivity.title}</p>
                    </NavLink>
                    }
                    {day === 2 && uiStore.activityTwoDone === false &&
                    <NavLink exact strict to="/bstep1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>{activeCurrentDayActivity.title}</p>
                    </NavLink>
                    }
                  </div>
                </div>
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
                <p className={style.subtitle}>"Dag {uiStore.currentDay} van jullie <span className={style.bold}>{journeyType}</span> reis in {country.country}"</p>
              </div>
              {type.type === "Avontuurlijk" && timeChecked === false && (
              <label  onClick = {handleTimeCheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_purple_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Avontuurlijk" && timeChecked === true && (
              <label onClick = {handleTimeUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_purple.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}

              {type.type === "Ontspanning" && timeChecked === false && (
              <label  onClick = {handleTimeCheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_blue_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Ontspanning" && timeChecked === true && (
              <label onClick = {handleTimeUncheck}  className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_blue.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && timeChecked === false && (
              <label onClick = {handleTimeCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_orange_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Quality-Time</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && timeChecked === true && (
              <label onClick = {handleTimeUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/time_orange.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>We zullen niet storen!</p>
                </div>
              </label>
              )}


              {type.type === "Avontuurlijk" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_purple_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

              {type.type === "Avontuurlijk" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_purple.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}

                {type.type === "Cultuur" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_orange_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

              {type.type === "Cultuur" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_orange.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}

                {type.type === "Ontspanning" && serviceChecked === false && (
              <label onClick = {handleServiceCheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_blue_outline.svg" alt = "blue button"/>
                  <p className={style.option_text}>Service</p>
                </div>
              </label>
              )}

               {type.type === "Ontspanning" && serviceChecked === true && (
              <label onClick = {handleServiceUncheck} className={style.options} htmlFor="time">
                <input className={style.checkbox}/>
                <div className={style.flex}>
                  <img src = "/assets/buttons/service_blue.svg" alt = "blue button"/>
                  <p className={style.option_text_bold}>Service komt eraan!</p>
                </div>
              </label>
              )}

            </div>
          </div>
        </div>
        <div className={style.info_polaroid}>
                <div className={style.polaroid}>
                  {type.type === "Ontspanning" && (
                      <picture className={style.option_image} >
                      <source className={style.option_image} type="image/webp" srcSet="/assets/images/d3_lazy.webp"/>
                      <img className={style.option_image} src="assets/images/d3_lazy.png" alt="activity"/>
                    </picture>
                  )}
                  {type.type === "Cultuur" && (
                      <picture className={style.option_image} >
                      <source className={style.option_image} type="image/webp" srcSet="/assets/images/d3_culture.webp"/>
                      <img className={style.option_image} src="assets/images/d3_culture.png" alt="activity"/>
                    </picture>
                  )}
                  {type.type === "Avontuurlijk" && (
                      <picture className={style.option_image} >
                      <source className={style.option_image} type="image/webp" srcSet="/assets/images/d3_adventure.webp"/>
                      <img className={style.option_image} src="assets/images/d3_adventure.png" alt="activity"/>
                    </picture>
                  )}
                  <div className={style.button_container_polaroid}>
                    <NavLink exact strict to="/cstep1">
                        <p className={`${typeName === "ontspanning" ? style.button_ontspanning : typeName === "avontuurlijk" ? style.button_avontuur : typeName === "cultuur" ? style.button_cultuur : ""}`}>Recreër jullie foto!</p>
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

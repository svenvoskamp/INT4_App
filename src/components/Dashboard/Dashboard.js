import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

const Dashboard = () => {
  const { uiStore, activityStore, stepStore } = useStores();
  const day = uiStore.currentDay;
  const currentDayActivity = activityStore.getActivityForCurrentDay(uiStore.currentBooking.typeId, uiStore.currentBooking.countryId, day);
  console.log(currentDayActivity);
  stepStore.getStepsForActivity(currentDayActivity.id);

  return (
    <>
    <p>Dashboard</p>
    <p>Welkom op jullie {uiStore.currentDay}e dag </p>
    <p> Dit is jullie activiteit {currentDayActivity.title}</p>
    <NavLink exact strict to="/step1">
        <button>Ga naar de activiteit</button>
    </NavLink>
    </>
  );
};

export default Dashboard;

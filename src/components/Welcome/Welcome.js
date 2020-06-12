import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const { uiStore, countryStore, typeStore } = useStores();
  const booking = uiStore.currentBooking;
  const country = countryStore.getCountryById(booking.countryId);
  const type = typeStore.getTypeById(booking.typeId);
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
    <h1>Proficiat met jullie {booking.count} jarig jubileum! {booking.name1} & {booking.name2} </h1>
    <p>Jullie zullen een {journeyType} reis maken door het prachtige {country.country}</p>
    </>
  );
};

export default Welcome;

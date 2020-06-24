import React from "react";
import style from "./end.module.css";
import { useStores } from "../../hooks/index";

const End = () => {
  const { uiStore, typeStore } = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
  const booking = uiStore.currentBooking;

  const typeReiziger = typeStore.getTypeById(booking.typeId);

  let journeyType;
  if(typeReiziger.type === "Ontspanning"){
    journeyType = "Jullie relax-moment zit erop!";
  }
  if(typeReiziger.type === "Cultuur"){
    journeyType = "Jullie culturele ervaring zit erop!";
  }

  if(typeReiziger.type === "Avontuurlijk"){
    journeyType = "Jullie avontuur zit erop!";
  }

  return (
    <div className = {`container container_twee_1_${type}`}>
    <div className={style.content}>
      <div className={style.part}>
        <div className={style.header}>
          <img width="70" height="40" src="/assets/buttons/logo_halo.svg" alt = "logo" />
          <h1 className={style.header_title}>{journeyType}</h1>
          <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Hopelijk hebben jullie er van genoten!"</p>
              </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default End;

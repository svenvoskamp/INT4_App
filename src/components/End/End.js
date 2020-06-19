import React, { useState } from "react";
import style from "./end.module.css";
import { useStores } from "../../hooks/index";

const End = () => {
  const { uiStore, stepStore, typeStore} = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();

  return (
    <div className = {`container container_twee_1_${type}`}>
    <div className={style.content}>
      <div className={style.part}>
        <div className={style.header}>
          <h1 className={style.header_title}>The end</h1>
          </div> 
        </div>
      </div>
  </div>
  );
};

export default End;

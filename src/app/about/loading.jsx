import React from "react";
import style from "./page.module.css";
const Loading = () => {
  return (
    <div className={style.loadCon}>
      <p className={style.load}>Loading...</p>
    </div>
  );
};

export default Loading;

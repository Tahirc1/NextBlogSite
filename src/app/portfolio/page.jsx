import React from "react";
import style from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Catalogue",
  description:
    "This page has catalogue option to get a specigic type of blog specialized in GenAI , Web3 and Devices",
};
const Portfolio = () => {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle}>Choose a Topic</h1>
      <div className={style.items}>
        <Link href="/portfolio/genaiml" className={style.item}>
          <span className={style.title}> GenAI/ML </span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}> Web3 </span>
        </Link>
        <Link href="/portfolio/device" className={style.item}>
          <span className={style.title}> Device </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

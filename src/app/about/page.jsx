import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import aboutImg from "../../../public/about.jpg";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgCon}>
        <Image src={aboutImg} fill="true" alt="image" className={style.img} />
        <div className={style.imgText}>
          <h1 className={style.imgTitle}> Digital story</h1>
          <h2 className={style.imgDesc}>Doing award winning work everyday</h2>
        </div>
      </div>
      <div className={style.textCon}>
        <div className={style.item}>
          <h1 className={style.textTitle}>Who are we ?</h1>
          <p className={style.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            massa diam, bibendum vel magna eget, hendrerit convallis lorem.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
            luctus erat orci, sit amet mattis libero aliquet in. Suspendisse sed
            odio vel orci dictum commodo.
            <br />
            <br />
            Vestibulum id vestibulum lectus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Proin ultrices dui et purus posuere, et
            fermentum enim congue. Vestibulum sem ante, congue nec tincidunt id,
            maximus vitae ex. Aliquam erat volutpat.
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.textTitle}>What we do ?</h1>
          <p className={style.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            massa diam, bibendum vel magna eget, hendrerit convallis lorem.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
            luctus erat orci, sit amet mattis libero aliquet in.
            <br /> <br /> -Suspendisse
            <br /> -odio vel orci dictum commodo.
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;

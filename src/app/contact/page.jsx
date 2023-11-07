import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import conImg from "public/contact.png";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact Page",
  description: "this is a next js contact page made by tahir",
};

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>{"Let's Keep in Touch"}</div>
      <div className={style.content}>
        <div className={style.imgCon}>
          <Image
            src={conImg}
            className={style.img}
            height={500}
            alt="conatct"
          />
        </div>
        <form className={style.form}>
          <input type="text" placeholder="Name" className={style.input} />
          <input type="text" placeholder="Email" className={style.input} />
          <textarea
            type="text"
            placeholder="Message"
            className={style.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <Button url={"#"} text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

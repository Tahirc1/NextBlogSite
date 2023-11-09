import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import conImg from "public/contact2t.png";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata = {
  title: "Contact Page",
  description: "This is a next js contact page for FutureBlog website ",
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
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

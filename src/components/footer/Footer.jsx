import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.container}>
      <div>@2023 All Rights Reserved</div>
      <div className={style.social}>
        <Image
          src="/1.png"
          width={15}
          className={style.icon}
          height={15}
          alt="Facebook icon"
        />
        <Image
          src="/2.png"
          width={15}
          className={style.icon}
          height={15}
          alt="Facebook icon"
        />
        <Image
          src="/3.png"
          width={15}
          className={style.icon}
          height={15}
          alt="Facebook icon"
        />
        <Image
          src="/4.png"
          width={15}
          className={style.icon}
          height={15}
          alt="Facebook icon"
        />
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React from "react";
import style from "./contactForm.module.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("msg send");
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" className={style.input} required />
      <input type="text" placeholder="Email" className={style.input} required />
      <textarea
        type="text"
        placeholder="Message"
        className={style.textArea}
        cols={30}
        rows={10}
        required
      ></textarea>
      <div className={style.btncon}>
        <button className={style.btn}> Send </button>
      </div>
    </form>
  );
};

export default ContactForm;

import React from "react";
import style from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import aboutImg from "../../../../public/about.jpg";
import items from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound;
};

export async function generateMetadata({ params }) {
  return {
    title: params.category,
    //description: post.desc,
  };
}
function Category({ params }) {
  const data = getData(params.category);
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Button text="See More" url="/" />
          </div>
          <div className={style.imgCon}>
            <Image
              src={item.image}
              alt="im"
              fill={true}
              className={style.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;

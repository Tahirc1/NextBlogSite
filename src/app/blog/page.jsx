import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Bimg from "@/../public/illustration.png";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  let data = await getData();
  return (
    <div className={style.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={style.container}
          key={item._id}
        >
          <div className={style.imgContainer}>
            <Image
              className={style.img}
              alt=""
              src={item.img}
              width={400}
              height={300}
            />
          </div>
          <div className={style.content}>
            <div className={style.title}>{item.title}</div>
            <div className={style.desc}> {item.desc} </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero2t.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Covering the intersection of technology, science and art{" "}
        </h1>
        <p className={styles.desc}>
          {" "}
          Reporting on the business of technology, startups and inventions{" "}
        </p>
        <Button url="/portfolio" text="See Our Blogs" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="hero image" />
      </div>
    </div>
  );
}

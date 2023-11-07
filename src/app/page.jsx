import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better Design your Digital product </h1>
        <p className={styles.desc}>
          {" "}
          Our products beat the market standard by a margin{" "}
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="hero image" />
      </div>
    </div>
  );
}

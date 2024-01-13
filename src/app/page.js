import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better tools. Stronger schools.</h1>
        <p className={styles.desc}>
          An easier way to market your schools, manage communications and
          enrollment, and strengthen your online presence.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className="item">
        <Image src={Hero} alt="Dark Light Hero" className={styles.img} />
      </div>
    </div>
  );
}

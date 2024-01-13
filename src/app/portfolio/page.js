import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

// static metadata s,s,s,s
export const metadata = {
  title: "Dark Light Portfolio",
  description:
    "Discover the captivating portfolio of Dark Light, showcasing a unique blend of creativity and innovation. Explore our diverse range of projects, from web design to photography, and witness the exceptional talent behind our work. Engage with our portfolio to experience the power of visual storytelling and unlock new perspectives. Let Dark Light inspire you, whether you're a client seeking exceptional services or an aspiring creative looking for inspiration. Explore our portfolio today and embark on a journey of visual excellence",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

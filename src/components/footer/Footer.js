import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Ferhaan Schmidt. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="Dark Light youtube"
        />
        <Image
          src="/2.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="Dark Light facebook"
        />
        <Image
          src="/3.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="Dark Light insagram"
        />
        <Image
          src="/4.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="Dark Light twitter"
        />
      </div>
    </div>
  );
};

export default Footer;

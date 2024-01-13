import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import contactImg from "public/contact.png";

export const metadata = {
  title: "Dark Light Contact Information",
  description:
    "Contact a comprehensive online learning platform to support and assist students in their educational journey",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Call Us from Anywhere</h1>
      <div className={styles.contact}>
        <div className={styles.imgContainer}>
          <Image
            src={contactImg}
            alt="Dark Light Conatct"
            fill={true}
            className={styles.img}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            type="text"
            placeholder="Your Message"
            className={styles.textArea}
            rows={10}
            cols={30}
          ></textarea>
          <Button url={"#"} text={"Send Your Message"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;

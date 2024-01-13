import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutImg from "/public/about.png";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Dark Light About",
  description:
    "Discover the story behind Dark Light, a passionate team dedicated to making a difference in the world of creativity and design. Learn about our mission, values, and the expertise we bring to every project. Dive into our journey of growth, innovation, and collaboration, and get to know the talented individuals who form the backbone of Dark Light. Find out how we strive to create impactful and memorable experiences for our clients and partners. Join us on this inspiring journey and explore what sets Dark Light apart.",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={aboutImg}
          fill={true}
          alt="Dark Light about"
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Transforming the way school</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Our mission</h1>
          <p className={styles.desc}>
            We believe in the power of education. This fuels our mission at
            Finalsite—to help schools prepare students to be successful and make
            the world a better place.
            <br />
            <br />
            Strong family engagement is linked to increased student achievement,
            social emotional skill development, and better student outcomes.
            Thats why weve developed software, services and a thriving network
            of people—to transform the way communities engage with their schools
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We believe in the power of education. This fuels our mission at
            Finalsite—to help schools prepare students to be successful and make
            the world a better place.
            <br />
            <br />
            Strong family engagement is linked to increased student achievement,
            social emotional skill development, and better student outcomes.
            Thats why weve developed software, services and a thriving network
            of people—to transform the way communities engage with their schools
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

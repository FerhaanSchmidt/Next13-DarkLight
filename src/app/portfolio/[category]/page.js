import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import category from "/public/category.png";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

// dynamic metadata d,d,d,d
export async function generateMetadata({ params }) {
  const data = await getData(params.category);
  const first = data[0];
  return {
    title: first.title,
    description: first.desc,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={category}
              fill={true}
              alt="Dark Light"
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import blog from "/public/blog.png";
import { notFound } from "next/navigation";

async function getData() {
  try {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      // next: { revalidate: 10 }, // fetch evert 10 secound
      cache: "no-store", // fetch every request
    });

    if (!res.ok) {
      return notFound();
    }
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// static metadata s,s,s,s
export const metadata = {
  title: "Dark Light Blog",
  description:
    "Explore the Dark Light blog, your go-to resource for valuable insights, inspiration, and industry trends. Delve into a wide range of topics, including design, technology, creativity, and more. Our expert writers share their knowledge and experiences to help you stay informed and inspired. Discover practical tips, thought-provoking articles, and engaging discussions that will fuel your creativity and keep you up-to-date with the latest developments in the field. Join our community of passionate learners and let the Dark Light blog be your source of inspiration.",
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              width={400}
              height={250}
              alt="Dark Light Blog"
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

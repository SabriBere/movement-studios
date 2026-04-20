import React from "react";
import Image, { type StaticImageData } from "next/image";
import contactImprovisationImage from "@/styles/Ilustrations/dance-2.jpeg";
import jazzTechniqueImage from "@/styles/Ilustrations/dance-4.jpeg";
import hipHopFreestyleImage from "@/styles/Ilustrations/dance-11.jpg";
import hipHopFoundationsImage from "@/styles/Ilustrations/dance-1.jpeg";
import jazzFunkImage from "@/styles/Ilustrations/dance-6.jpeg";
import styles from "./ClassesCards.module.css";

type ClassCardItem = {
  code: string;
  description: string;
  image: StaticImageData;
  schedule: string;
  title: string;
  wide?: boolean;
};

function ClassCard() {
  const classes: ClassCardItem[] = [
    {
      code: "C1",
      description:
        "This class introduces hip hop dance, including isolations, popping, locking, and basic footwork.",
      image: hipHopFoundationsImage,
      schedule: "Tuesdays 7:00 PM - 9:00PM",
      title: "Hip Hop Foundations",
    },
    {
      code: "C2",
      description:
        "This class helps you develop your own unique movement vocabulary and respond to music in the moment.",
      image: hipHopFreestyleImage,
      schedule: "Tuesdays 7:00 PM - 9:00PM",
      title: "Hip Hop Freestyle",
    },
    {
      code: "C4",
      description:
        "This class focuses on classic jazz styles while building strength, flexibility, and musicality.",
      image: jazzTechniqueImage,
      schedule: "Wednesdays 7:00 PM - 9:00PM",
      title: "Jazz Technique",
    },
    {
      code: "D5",
      description:
        "The class is perfect for those who love to dance with power and attitude.",
      image: jazzFunkImage,
      schedule: "Thursdays 7:00 PM - 9:00PM",
      title: "Jazz Funk",
    },
    {
      code: "B2",
      description:
        "This class focuses on movement through touch and weight sharing.",
      image: contactImprovisationImage,
      schedule: "Fridays 7:00 PM - 9:00PM",
      title: "Contact Improvisation",
      wide: true,
    },
  ];

  return (
    <>
      {classes.map((item, index) => (
        <article
          className={`${styles.card} ${item.wide ? styles.cardWide : ""}`}
          key={index}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.image}
              sizes={
                item.wide
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
            />
            <div className={styles.overlay} />
            <span className={styles.code}>{item.code}</span>
          </div>

          <div className={styles.content}>
            <div className={styles.contentBody}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>

            <div className={styles.footer}>
              <p className={styles.schedule}>{item.schedule}</p>
              <a href="/booking" className={styles.link}>
                Book Now
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default ClassCard;
import React from "react";
import Image, { StaticImageData } from "next/image";
import sophiaImage from "@/styles/Ilustrations/dance-8.jpg";
import alisaImage from "@/styles/Ilustrations/dance-9.jpg";
import styles from "./FoundersCards.module.css";

type AboutPerson = {
    description?: string;
    image?: StaticImageData;
    job: string;
    name: string;
};

export const FoundersCards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <h2 className={styles.title}>Our Founders</h2>

                <blockquote>
                    <p className={styles.quote}>
                        &quot;Find your flow, and dance your truth.&quot;
                    </p>
                    <cite className={styles.cite}>— Sophia Bennett</cite>
                </blockquote>
            </div>

            <div className={styles.rightPanel}>
                <article className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={sophiaImage}
                            alt="Sophia Bennett, founder and instructor"
                            fill
                            className={styles.image}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </div>
                    <div className={styles.cardInfoPink}>
                        <h3 className={styles.cardTitle}>Sophia Bennett</h3>
                        <p className={styles.cardRole}>Founder &amp; Instructor</p>
                    </div>
                </article>

                <article className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={alisaImage}
                            alt="Alisa Morris, founder and program manager"
                            fill
                            className={styles.image}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </div>
                    <div className={styles.cardInfoCyan}>
                        <h3 className={styles.cardTitle}>Alisa Morris</h3>
                        <p className={styles.cardRole}>Founder &amp; Program Manager</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export const FoundersCardSecondary = () => {
    const founders: AboutPerson[] = [
        {
            name: "Sophia Bennett",
            job: "Founder & Instructor",
            image: sophiaImage,
        },
        {
            name: "Alisa Morris",
            job: "Founder & Program Manager",
            image: alisaImage,
        },
    ];

    return (
        <div className={styles.secondaryContainer}>
            {founders.map((founder, index) => (
                <article className={styles.secondaryCard} key={index}>
                    <div className={styles.secondaryImageWrapper}>
                        {founder.image && (
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                fill
                                className={styles.secondaryImage}
                                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                                priority
                            />
                        )}
                    </div>

                    <div
                        className={
                            index === 1
                                ? styles.secondaryInfoCyan
                                : styles.secondaryInfoPink
                        }
                    >
                        <h3 className={styles.secondaryTitle}>{founder.name}</h3>
                        <p className={styles.secondaryRole}>{founder.job}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

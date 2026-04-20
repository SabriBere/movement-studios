import React from "react";
import Image from "next/image";
import sophiaImage from "@/styles/Ilustrations/dance-8.jpg";
import alisaImage from "@/styles/Ilustrations/dance-9.jpg";
import styles from "./FoundersCards.module.css";

const FoundersCards = () => {
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
                            alt="sophia"
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
                            alt="alisa"
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

export default FoundersCards;
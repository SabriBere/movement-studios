import React from "react";
import Image from "next/image";
import spaceImage from "@/styles/Ilustrations/dance-20.jpg";
import styles from "./OurSpaceCard.module.css";

const OurSpaceCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridWrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={spaceImage}
                        alt="Dance studio space"
                        fill
                        className={styles.image}
                        sizes="(min-width: 1024px) 67vw, 100vw"
                    />
                    <div className={styles.overlay} />
                </div>

                <div className={styles.content}>
                    <div className={styles.contentInner}>
                        <h2 className={styles.title}>Our Space</h2>

                        <p className={styles.text}>
                            Whether you&apos;re a beginner looking to explore expressive
                            movement or an advanced dancer ready to refine your technique, we
                            have classes for{" "}
                            <span className={styles.highlight}>
                                you! Join our weekly sessions, drop in for open choreography,
                            </span>{" "}
                            or take part in our special upcoming choreography series.
                            Don&apos;t miss our special Masterclass with Maxime Longue this
                            Saturday! Limited spots available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpaceCard;
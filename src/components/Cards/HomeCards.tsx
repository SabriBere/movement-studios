import React from "react";
import Image, { StaticImageData } from "next/image";
import ButtonCards from "../Buttons/ButtonCards";
import styles from './HomeCards.module.css'

type HomeCardsProps = {
    image: StaticImageData;
    imageAlt?: string;
    sectionTitle: string;
    cardTitle: string;
    description: string;
    buttonText: string;
};

const HomeCards = ({
    image,
    imageAlt = "section image",
    sectionTitle,
    cardTitle,
    description,
    buttonText,
}: HomeCardsProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.imagePanel}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className={styles.image}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />

                <h2 className={styles.sectionTitle}>
                    {sectionTitle}
                </h2>
            </div>

            <div className={styles.contentPanel}>
                <div className={styles.contentWrapper}>
                    <h3 className={styles.cardTitle}>
                        {cardTitle}
                    </h3>

                    <p className={styles.description}>
                        {description}
                    </p>

                    <ButtonCards text={buttonText} />
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
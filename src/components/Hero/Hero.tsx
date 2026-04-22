"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ image, title }: { image: StaticImageData, title: string }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <section className={styles.containerHeroCommon}>
      <div className="relative min-h-[430px] overflow-hidden bg-[#171717] sm:min-h-[520px] lg:min-h-[565px]">
        <div
          className={`${styles.loadingOverlay} ${isLoaded ? styles.loadingOverlayHidden : ""}`}
          aria-hidden="true"
        >
          <div className={styles.loadingPanel}>
            <span className={styles.loadingLabel}>Loading image</span>
            <span className={styles.loadingBar} />
          </div>
        </div>

        <Image
          src={image}
          alt={title}
          fill
          className={`${styles.heroImage} ${isLoaded ? styles.heroImageLoaded : ""}`}
          sizes="100vw"
          placeholder="blur"
          priority
          onLoad={() => setIsLoaded(true)}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero

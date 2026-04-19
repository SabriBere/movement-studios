import Image from "next/image";
import classesHeroImage from "@/styles/Ilustrations/dance-19.jpg";
import aboutHeroImage from "@/styles/Ilustrations/dance-18.jpg";
import styles from "./Hero.module.css";

const HeroClasses = () => {
  return (
    <section className={styles.containerHeroCommon}>
      <div className="relative min-h-[430px] overflow-hidden bg-[#171717] sm:min-h-[520px] lg:min-h-[565px]">
        <Image
          src={classesHeroImage}
          alt="Dance class in motion"
          fill
          className={styles.heroImage}
          sizes="100vw"
          priority
        />

        <div className={styles.content}>
          <h1 className={styles.title}>Classes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroClasses;
import Image,  { StaticImageData }  from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ image, title }: { image: StaticImageData, title: string }) => {
  return (
    <section className={styles.containerHeroCommon}>
      <div className="relative min-h-[430px] overflow-hidden bg-[#171717] sm:min-h-[520px] lg:min-h-[565px]">
        <Image
          src={image}
          alt={title}
          fill
          className={styles.heroImage}
          sizes="100vw"
          priority
        />

        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero
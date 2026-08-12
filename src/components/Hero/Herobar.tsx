import Image from "next/image";
import heroImage from "@/styles/Ilustrations/dance-15.jpg";
import ButtonsBooking from "../Buttons/ButtonsBooking";
import TextCarousel from "./TextCarousel";
import styles from "./Herobar.module.css";

type HerobarProps = {
    heading?: string;
};

export default function Herobar({
    heading = "Find your\nflow.",
}: HerobarProps) {
    return (
        <section className={styles.container} aria-label="Hero">
            <div className={styles.wrapper}>
                <Image
                    src={heroImage}
                    alt="Dancer moving in the Movement Studios space"
                    fill
                    className={styles.image}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority
                    placeholder="blur"
                />
                <div className={styles.content}>
                    <h1 className={styles.title}>{heading}</h1>
                    <ButtonsBooking title="Reserve your spot" />
                </div>

                <TextCarousel />
            </div>
        </section>
    );
}

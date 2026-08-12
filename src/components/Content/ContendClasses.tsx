import Image from "next/image";
import ClassCard from "../Cards/ClassesCards";
import ourPromise from "@/styles/Ilustrations/dance-5.jpeg";
import styles from "./ContendClasses.module.css";

export default function ContentClasses() {
    return (
        <section className={styles.section}>
            <div className={styles.gridWrapper}>
                {/* Titulo */}
                <aside className={styles.asideTop}>
                    <h2 className={`${styles.asideTitle} ${styles.asideTitleSmall}`}>
                        Booking Experience for Classes
                    </h2>
                </aside>

                <div className={styles.cardsContainer}>
                    <ClassCard />
                </div>
            </div>

            {/* Promises */}
            <div className={styles.gridWrapper}>
                <aside className={styles.asideBottom}>
                    <h2 className={styles.asideTitle}>Our Promise</h2>
                </aside>

                <div className={styles.promiseWrapper}>
                    <div className={styles.promiseTextContainer}>
                        <p className={styles.promiseText}>
                            Whether you&apos;re a beginner looking to explore expressive
                            movement or an advanced dancer ready to refine your technique, we
                            have classes for you!
                        </p>
                    </div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src={ourPromise}
                            alt="Dancers practicing together in the studio"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

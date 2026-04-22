import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>404 / Page Not Found</p>
                    <h1 className={styles.title}>
                        Wrong turn.
                        <br />
                        Keep moving.
                    </h1>
                    <p className={styles.description}>
                        The page you tried to reach is not part of this choreography.
                        Let&apos;s get you back to Movement Studios.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/" className={styles.primaryAction}>
                            Back Home
                        </Link>
                        <Link href="/classes" className={styles.secondaryAction}>
                            View Classes
                        </Link>
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <div className={styles.card}>
                        <span className={styles.cardLabel}>Lost Sequence</span>
                        <span className={styles.cardNumber}>404</span>
                    </div>
                    <div className={styles.ribbonBlue} />
                    <div className={styles.ribbonCyan} />
                    <div className={styles.ribbonFucsia} />
                </div>
            </section>
        </main>
    );
}

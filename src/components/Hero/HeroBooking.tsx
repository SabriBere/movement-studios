import React from 'react'
import styles from './Herobooking.module.css'

const HeroBooking = () => {
    return (
        <section className={styles.containerHeroBooking}>
            <p className={styles.titleSection}>
                Booking
            </p>
            <h1 className={styles.titleBooking}>
                Reserve your next class.
            </h1>
            <p className={styles.subtitle}>
                Tell us which style you want to try, your preferred day, and
                whether it&apos;s your first time with us. We&apos;ll get back to
                you with availability and next steps within one business day.
            </p>
        </section>
    )
}

export default HeroBooking
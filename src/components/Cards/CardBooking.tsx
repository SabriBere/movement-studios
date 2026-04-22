import React from 'react'
import styles from './CardBooking.module.css'

const bookingOptions = [
    {
        title: "Email",
        value: "hello@movementstudiosbk.com",
        href: "mailto:hello@movementstudiosbk.com",
    },
    {
        title: "Phone",
        value: "(646) 555-4821",
        href: "tel:+16465554821",
    },
    {
        title: "Instagram",
        value: "@movementstudiosbk",
        href: "https://www.instagram.com/movementstudiosbk",
    },
];


const CardBooking = () => {
    return (
        <section className={styles.containerCardBooking}>
            {bookingOptions.map((option) => (
                <div
                    key={option.title}
                    className={styles.title}
                >
                    <p className={styles.subtitule}>
                        {option.title}
                    </p>
                    <a
                        href={option.href}
                        className={styles.link}
                        target={
                            option.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                            option.href.startsWith("http")
                                ? "noreferrer"
                                : undefined
                        }
                    >
                        {option.value}
                    </a>
                </div>
            ))}
        </section>
    )
}

export default CardBooking
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

type FooterProps = {
    className?: string;
};

const contact = {
    address: "224 Nostrand Ave, Brooklyn, NY 11216",
    email: "hello@movementstudiosbk.com",
    facebookHandle: "Movement Studios Brooklyn",
    facebookUrl: "https://www.facebook.com/movementstudiosbk",
    instagramHandle: "@movementstudiosbk",
    instagramUrl: "https://www.instagram.com/movementstudiosbk",
    phoneDisplay: "(646) 555-4821",
    phoneHref: "tel:+16465554821",
};

const footerItems = [
    {
        label: "Our Socials",
        href: "#socials",
    },
    {
        label: "Email us",
        href: "mailto:hello@movementstudios.com",
    },
    {
        label: "Book with us",
        href: "/booking",
    },
];

export default function Footer({ className = "" }: FooterProps) {
    const booking = usePathname()
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {booking !== '/booking' && (
                <footer className={`${styles.footer} ${className}`.trim()}>
                    <div className={styles.topContainer}>
                        <div>
                            <h2 className={styles.logo}>Mov. Stu.</h2>
                        </div>

                        <div className={styles.infoColumn}>
                            <div>
                                <p>Email:</p>
                                <a href={`mailto:${contact.email}`} className={styles.link}>
                                    {contact.email}
                                </a>
                            </div>

                            <div id="socials">
                                <p>Instagram:</p>
                                <a
                                    href={contact.instagramUrl}
                                    className={styles.linkUnderline}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {contact.instagramHandle}
                                </a>
                            </div>

                            <div>
                                <p>Facebook:</p>
                                <a
                                    href={contact.facebookUrl}
                                    className={styles.linkUnderline}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {contact.facebookHandle}
                                </a>
                            </div>
                        </div>

                        <div className={styles.addressColumn} id="location">
                            <div>
                                <p>Address:</p>
                                <p className={styles.addressText}>
                                    {contact.address}
                                    <br />
                                    <a href={contact.phoneHref} className={styles.link}>
                                        {contact.phoneDisplay}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div ref={ref} className={styles.bottomGrid}>
                        {footerItems.map((item) => {
                            const variant =
                                item.label === "Our Socials"
                                    ? styles.blue
                                    : item.label === "Email us"
                                        ? styles.black
                                        : styles.fucsia;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`${styles.footerItem} ${variant} ${isVisible ? styles.animateIn : ""
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                    <div className="bg-black">
                        <p className="text-white text-center py-4">
                            © Sabri Bere  - 2026
                        </p>
                    </div>
                </footer>
            )}
        </>
    );
}

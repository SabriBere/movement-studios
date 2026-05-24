"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

type FooterProps = {
    className?: string;
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

    return (
        <>
            {booking !== '/booking' && (
                <footer className={`${styles.footer} ${className}`.trim()}>
                    <div className={styles.bottomGrid}>
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
                                    className={`${styles.footerItem} ${variant} ${styles.animateIn}`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                    <div className="bg-black">
                        <p className={styles.copyright}>
                            © SABRI BERE - 2026
                        </p>
                    </div>
                </footer>
            )}
        </>
    );
}

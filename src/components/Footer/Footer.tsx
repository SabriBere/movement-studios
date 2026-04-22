"use client";

import { useEffect, useRef, useState } from "react";
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
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -8% 0px",
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

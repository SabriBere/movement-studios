"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

type NavbarProps = {
    className?: string;
};

const desktopNavItems = [
    { label: "Classes", href: "/classes" },
    { label: "About", href: "/about" },
];

const mobileNavItems = [
    { label: "Classes", href: "/classes", variant: "mobileCian" },
    { label: "About us", href: "/about", variant: "mobileCian" },
    { label: "Book with us", href: "/booking", variant: "mobileFucsia" },
];

export default function Navbar({ className = "" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className={`${styles.nav} ${className}`.trim()} aria-label="Primary">
            <div className={styles.mobileWrapper}>
                <div className={styles.mobileBar}>
                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((current) => !current)}
                    >
                        <span className={styles.hamburger}>
                            <span className={styles.hamburgerLine} />
                            <span className={styles.hamburgerLine} />
                            <span className={styles.hamburgerLine} />
                        </span>
                    </button>

                    <Link href="/" className={styles.mobileBrand} prefetch={false}>
                        Movement Studios.
                    </Link>
                </div>

                {isOpen ? (
                    <div className={styles.mobileMenu}>
                        {mobileNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`${styles.mobileMenuItem} ${styles[item.variant as keyof typeof styles]}`}
                                prefetch={false}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className={styles.desktopBar}>
                <div className={styles.desktopNavList}>
                    {desktopNavItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={styles.desktopNavItem}
                            prefetch={false}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Link href="/" className={styles.desktopBrand} prefetch={false}>
                    Movement Studios.
                </Link>
            </div>
        </nav>
    );
}

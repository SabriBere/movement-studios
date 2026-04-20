import styles from './Footer.module.css'

type FooterProps = {
    className?: string;
};

const footerItems = [
    {
        label: "Our Socials",
        href: "#socials",
        className: "bg-blue-barry !text-white",
    },
    {
        label: "Email us",
        href: "mailto:hello@movementstudios.com",
        className: "bg-black !text-white",
    },
    {
        label: "Book with us",
        href: "/booking",
        className: "bg-fucsia text-black",
    },
];

export default function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={`${styles.footer} ${className}`}>
            <div className={styles.topContainer}>
                <div>
                    <h2 className={styles.logo}>Mov. Stu.</h2>
                </div>

                <div className={styles.infoColumn}>
                    <div>
                        <p>Email:</p>
                        <a href="mailto:hello@figma.com" className={styles.link}>
                            hello@figma.com
                        </a>
                    </div>

                    <div>
                        <p>Instagram:</p>
                        <a href="#" className={styles.linkUnderline}>
                            @figma
                        </a>
                    </div>

                    <div>
                        <p>Facebook:</p>
                        <a href="#" className={styles.linkUnderline}>
                            figma
                        </a>
                    </div>
                </div>

                <div className={styles.addressColumn}>
                    <div>
                        <p>Address:</p>
                        <p className={styles.addressText}>
                            224 Candyland Lane, Brooklyn, NY
                            <br />
                            (646) 555-4567
                        </p>
                    </div>

                    <p>
                        Movement Studios ©
                        <br />
                        2025 All Rights Reserved
                    </p>
                </div>
            </div>

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
                            className={`${styles.footerItem} ${variant}`}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </footer>
    );
}

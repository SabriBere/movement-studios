import React from "react";
import styles from "./Herobar.module.css";

type HerobarProps = {
    tickerItems?: string[];
};

const defaultTickerItems = [
    "Fluid. Expressive. Powerful. Move with us!",
    "Masterclass Alert: Guest Choreographer Workshop Every Saturday",
    "New Contemporary Dance Classes Now Enrolling – Secure Your Spot!",
];

const TextCarousel = ({
    tickerItems = defaultTickerItems,
}: HerobarProps) => {
    return (
        <div className={styles.tickerContainer}>
            <div className={styles.tickerTrack}>
                {[...tickerItems, ...tickerItems].map((item, index) => (
                    <span key={`${item}-${index}`}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export default TextCarousel;
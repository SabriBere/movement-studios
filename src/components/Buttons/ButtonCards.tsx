import Link from "next/link";
import styles from './Buttons.module.css'


const ButtonCards = ({ text, route }: { text: string, route?: string }) => {
    return (
        <Link
            href={route ?? "/booking"}
            className={styles.containerOtherButtons}
            prefetch={false}
        >
            {text}
        </Link>
    )
}

export default ButtonCards

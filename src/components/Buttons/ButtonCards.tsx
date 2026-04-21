import styles from './Buttons.module.css'


const ButtonCards = ({ text, route }: { text: string, route?: string }) => {
    return (
        <a href={route ?? "/booking"} className={styles.containerOtherButtons}>
            {text}
        </a>
    )
}

export default ButtonCards

import styles from './Buttons.module.css'


const ButtonCards = ({ text, route }: { text: string, route?: string }) => {

    //pasar ruta dinamica
    return (
        <a href="/booking" className={styles.containerOtherButtons}>
            {text}
        </a>
    )
}

export default ButtonCards
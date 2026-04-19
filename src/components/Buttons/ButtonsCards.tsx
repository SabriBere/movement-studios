import styles from "./ButtonCard.module.css";

const ButtonsCards = ({ title }: { title: string }) => {
  return (
    <a href="/booking" className={styles.containerButton}>
      {title}
    </a>
  );
};

export default ButtonsCards;
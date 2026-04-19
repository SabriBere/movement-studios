import styles from "./Buttons.module.css";

const ButtonsBooking = ({ title }: { title: string }) => {
  return (
    <a href="/booking" className={styles.containerButtonBooking}>
      {title}
    </a>
  );
};

export default ButtonsBooking;
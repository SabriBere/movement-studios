import Link from "next/link";
import styles from "./Buttons.module.css";

const ButtonsBooking = ({ title }: { title: string }) => {
  return (
    <Link href="/booking" className={styles.containerButtonBooking}>
      {title}
    </Link>
  );
};

export default ButtonsBooking;

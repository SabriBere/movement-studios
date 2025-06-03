"use client";
import styles from "./modal.module.scss";

const Modal = ({ isOpen, onClose, client }: ModalProps) => {
    if (!isOpen || !client) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>
                    &times;
                </button>
                <h2>{client.nombre}</h2>
                <p>
                    <strong>Email:</strong> {client.email}
                </p>
                <p>
                    <strong>País:</strong> {client.pais}
                </p>
                <p>
                    <strong>Teléfono:</strong> {client.telefono}
                </p>
                <p>
                    <strong>Dirección:</strong> {client.direccion}
                </p>
                <div>
                    <strong>Historial:</strong>
                    <ul>
                        {client.historial.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;

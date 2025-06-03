type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    client: {
        id: string;
        nombre: string;
        email: string;
        pais: string;
        telefono: string;
        direccion: string;
        historial: string[];
    };
};

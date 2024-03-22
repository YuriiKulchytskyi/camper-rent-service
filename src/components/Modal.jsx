import { Backdrop } from './Card/ModalCard/Backdrop/Backdrop';
import { ModalContainer } from './Card/ModalCard/Backdrop/Backdrop.styled';
import { ModalCard } from './Card/ModalCard/ModalCard';

export const Modal = ({ onClose, id }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <ModalCard onClose={onClose} id={id} /> {/* Передача id як пропс */}
      </ModalContainer>
    </>
  );
};

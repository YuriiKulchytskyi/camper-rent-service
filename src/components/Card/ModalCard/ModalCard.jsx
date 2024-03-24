import React from 'react';

import {
  Location,
  ModalCloseButton,
  ModalDescription,
  ModalGallery,
  ModalGalleryItem,
  ModalInformationWrapper,
  ModalItemImage,
  ModalPrice,
  ModalRateLocationWrapper,
  ModalTechInfo,
  ModalTitle,
  Rate,
  SectionModal,
} from './ModalCard.styled';

const Modal = ({ onClose, item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <SectionModal>
      <ModalInformationWrapper>
        <ModalTitle>{item.name}</ModalTitle>
        <ModalRateLocationWrapper>
          <Rate>
            {item.rating}({item.reviews.length} reviews)
          </Rate>
          <Location>{item.location}</Location>
        </ModalRateLocationWrapper>
        <ModalPrice>€{item.price},00</ModalPrice>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
      </ModalInformationWrapper>
      <ModalTechInfo>
        <ModalGallery>
          <ModalGalleryItem>
            <ModalItemImage src={item.gallery[0]} alt="camper" />
          </ModalGalleryItem>
          <ModalGalleryItem>
            <ModalItemImage src={item.gallery[1]} alt="camper" />
          </ModalGalleryItem>
          <ModalGalleryItem>
            <ModalItemImage src={item.gallery[2]} alt="camper" />
          </ModalGalleryItem>
        </ModalGallery>
        <ModalDescription>{item.description}</ModalDescription>
      </ModalTechInfo>
    </SectionModal>
  );
};

export default Modal;

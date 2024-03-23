import React, { useEffect } from 'react';

import {
  AdditionalNaw,
  Backdrop,
  Location,
  ModalCloseButton,
  ModalContent,
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
  StyledLink,
} from './ModalCard.styled';
// import { FeatureDetails } from 'components/Features/Details/FeatureDetails';
// import { FeaturesOptions } from 'components/Features/FeaturesOptions/FeaturesOptions';

const Modal = ({ onClose, item }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (event.target.classList.contains('backdrop')) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Backdrop>
      <ModalContent>
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
          <AdditionalNaw>
            <StyledLink to="/catalog/features">Features</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </AdditionalNaw>
        </SectionModal>
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;

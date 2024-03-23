import React, { useState, useEffect } from 'react';

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
import { Feature } from 'components/Features/Feature';
import { Reviews } from 'components/Reviews/Reviews';

const Modal = ({ onClose, item }) => {
  const [activeTab, setActiveTab] = useState('features');

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

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

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
            <StyledLink
              to="features"
              onClick={() => handleTabChange('features')}
              active={activeTab === 'features'}
            >
              Features
            </StyledLink>
            <StyledLink
              to="reviews"
              onClick={() => handleTabChange('reviews')}
              active={activeTab === 'reviews'}
            >
              Reviews
            </StyledLink>
          </AdditionalNaw>
          {activeTab === 'features' && <Feature item={item} />}
          {activeTab === 'reviews' && <Reviews item={item} />}
        </SectionModal>
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;

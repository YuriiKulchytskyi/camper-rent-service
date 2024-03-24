import React, { useState, useEffect } from 'react';
import {
  AdditionalNav,
  Backdrop,
  InfoContainer,
  InfoFormContainer,
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
import icons from '../../../images/icons.svg';
import { Feature } from 'components/Features/Feature';
import { Reviews } from 'components/Reviews/Reviews';
import { BookingForm } from 'components/BookingForm/BoockingForm';
import { Svg } from '../Card/Card.styled';

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
    <Backdrop className="backdrop">
      <ModalContent>
        <SectionModal>
          <ModalInformationWrapper>
            <ModalTitle>{item.name}</ModalTitle>
            <ModalRateLocationWrapper>
              <Rate>
                <Svg width={'16px'} height={'16px'}>
                  <use href={`${icons}#icon-star`} />
                </Svg>
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
          <AdditionalNav>
            <StyledLink
              to="features"
              onClick={() => handleTabChange('features')}
            >
              Features
            </StyledLink>
            <StyledLink to="reviews" onClick={() => handleTabChange('reviews')}>
              Reviews
            </StyledLink>
          </AdditionalNav>
          <InfoFormContainer>
            <InfoContainer>
              {activeTab === 'features' && <Feature item={item} />}
              {activeTab === 'reviews' && <Reviews item={item} />}
            </InfoContainer>
            <BookingForm />
          </InfoFormContainer>
        </SectionModal>
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;

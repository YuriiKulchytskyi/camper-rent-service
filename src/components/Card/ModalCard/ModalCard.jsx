import { useEffect, useState } from 'react';
import { Location, Rate } from '../Card/Card.styled';
import {
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
  SectionModal,
} from './ModalCard.styled';

// import datebase from '../../../db/datebase.json';

export const ModalCard = ({ onClose, id }) => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchCamperData = async () => {
      try {
        const response = await fetch(
          `https://65fc2c8414650eb2100bb854.mockapi.io/api/Campers/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCamperData();
  }, [id]);

  // Перевірка, чи дані завантажені перед відображенням
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <SectionModal>
      <ModalInformationWrapper>
        <ModalTitle>{cardData.name}</ModalTitle>
        <ModalRateLocationWrapper>
          <Rate>
            {cardData.rating}({cardData.reviews} reviews)
          </Rate>
          <Location>{cardData.location}</Location>
        </ModalRateLocationWrapper>
        <ModalPrice>€{cardData.price},00</ModalPrice>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
      </ModalInformationWrapper>
      <ModalTechInfo>
        <ModalGallery>
          <ModalGalleryItem>
            <ModalItemImage src={cardData.gallery[0]} alt="camper" />
          </ModalGalleryItem>
          <ModalGalleryItem>
            <ModalItemImage src={cardData.gallery[1]} alt="camper" />
          </ModalGalleryItem>
          <ModalGalleryItem>
            <ModalItemImage src={cardData.gallery[2]} alt="camper" />
          </ModalGalleryItem>
        </ModalGallery>
        <ModalDescription>{cardData.description}</ModalDescription>
      </ModalTechInfo>
    </SectionModal>
  );
};

import {
  CardWrapper,
  Image,
  InformationWrapper,
  Description,
  Button,
  MainInformationWrapper,
  TitlePriceInfo,
  PriceLikeSection,
  Title,
  Price,
  RateLocationWrapper,
  Svg,
  Location,
  Rate,
  ListItem,
  ListOfInformation,
  ButtonLike,
  ImageWrapper,
} from './Card.styled';
import icons from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../../redux/advert/advertSlice';
import { useEffect, useState } from 'react';
import Modal from '../ModalCard/Modal';

export const Card = ({ card }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const iconHeart = isFavorite ? 'heart-red' : 'like';

  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteFromStorage = localStorage.getItem(`favorite_${card._id}`);
    if (favoriteFromStorage !== null) {
      setIsFavorite(true);
    }
  }, [card._id]);

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addToFavorite(card));
      localStorage.setItem(`favorite_${card._id}`, JSON.stringify(card));
    } else {
      dispatch(removeFromFavorite(card.id));
      localStorage.removeItem(`favorite_${card._id}`);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={card.gallery[0]} alt="camper" />
      </ImageWrapper>
      <InformationWrapper>
        <MainInformationWrapper>
          <TitlePriceInfo>
            <Title>{card.name}</Title>
            <PriceLikeSection>
              <Price>€{card.price},00</Price>
              <ButtonLike onClick={handleSelectFavorite}>
                <Svg width={'24px'} height={'24px'}>
                  <use href={`${icons}#icon-${iconHeart}`}></use>
                </Svg>
              </ButtonLike>
            </PriceLikeSection>
          </TitlePriceInfo>
          <RateLocationWrapper>
            <Rate>
              <Svg width={'16px'} height={'16px'}>
                <use href={`${icons}#icon-star`} />
              </Svg>
              {card.rating}({card.reviews.length} reviews)
            </Rate>
            <Location>
              <Svg width={'16px'} height={'16px'}>
                <use href={`${icons}#icon-map-pin`} />
              </Svg>
              {card.location}
            </Location>
          </RateLocationWrapper>
        </MainInformationWrapper>
        <Description>{card.description}</Description>
        <ListOfInformation>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Adults`}></use>
            </Svg>
            {card.adults} Adults
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Container`}></use>
            </Svg>
            {card.transmission}
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Vertical-container`}></use>
            </Svg>
            {card.engine}
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Horizontal-container`}></use>
            </Svg>
            {card.details.kitchen} Kitchen
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Container-1`}></use>
            </Svg>
            {card.details.beds} Beds
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-wind-icon`}></use>
            </Svg>
            {card.details.airConditioner} AC
          </ListItem>
        </ListOfInformation>
        <Button onClick={openModal}>Show more</Button>
      </InformationWrapper>
      {showModal && <Modal item={card} onClose={closeModal} />}
    </CardWrapper>
  );
};

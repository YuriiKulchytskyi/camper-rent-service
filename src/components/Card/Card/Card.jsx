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
// import { useEffect, useState } from 'react';

export const Card = ({ card, onClick }) => {
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
              <ButtonLike>
                <Svg width={'24px'} height={'24px'}>
                  <use href={`${icons}#icon-like`}></use>
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
        <Button onClick={onClick}>Show more</Button>
      </InformationWrapper>
    </CardWrapper>
  );
};

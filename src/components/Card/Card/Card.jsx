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

export const Card = ({
  id,
  gallery,
  name,
  price,
  rate,
  description,
  location,
  reviews,
  adults,
  transmission,
  engine,
  kitchen,
  beds,
  airConditioner,
  openModal,
}) => {
  const handleButtonClick = () => {
    console.log(`Clicked on card with id: ${id}`); // Виводимо id картки у консоль
    openModal(id);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={gallery} alt="camper" />
      </ImageWrapper>
      <InformationWrapper>
        <MainInformationWrapper>
          <TitlePriceInfo>
            <Title>{name}</Title>
            <PriceLikeSection>
              <Price>€{price},00</Price>
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
              {rate}({reviews} reviews)
            </Rate>
            <Location>
              <Svg width={'16px'} height={'16px'}>
                <use href={`${icons}#icon-map-pin`} />
              </Svg>
              {location}
            </Location>
          </RateLocationWrapper>
        </MainInformationWrapper>
        <Description>{description}</Description>
        <ListOfInformation>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Adults`}></use>
            </Svg>
            {adults} Adults
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Container`}></use>
            </Svg>
            {transmission}
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Vertical-container`}></use>
            </Svg>
            {engine}
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Horizontal-container`}></use>
            </Svg>
            {kitchen} Kitchen
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-Container-1`}></use>
            </Svg>
            {beds} Beds
          </ListItem>
          <ListItem>
            <Svg width={'20px'} height={'20px'}>
              <use href={`${icons}#icon-wind-icon`}></use>
            </Svg>
            {airConditioner} AC
          </ListItem>
        </ListOfInformation>
        <Button onClick={handleButtonClick}>Show more</Button>{' '}
        {/* Викликаємо handleButtonClick при кліку */}
      </InformationWrapper>
    </CardWrapper>
  );
};

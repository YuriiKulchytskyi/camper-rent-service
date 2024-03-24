import { Button } from 'components/Card/Card/Card.styled';
import { Header } from 'components/Header/Header';
import {
  BackgroundWrapper,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  HomeTitle,
} from './HomePage.styled';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWrapper>
      <Header />
      <DescriptionWrapper>
        <HomeTitle>Exploring Freedom: The Advantages of Camper Vans</HomeTitle>
        <Description>
          In today's fast-paced world, camper vans offer a unique opportunity to
          explore and embrace the freedom of the open road. With their compact
          size and versatile design, camper vans provide the perfect balance
          between comfort and mobility. Whether it's a spontaneous weekend
          getaway or a cross-country adventure, these nomadic homes allow
          travelers to connect with nature, discover hidden gems, and create
          unforgettable memories. Experience the convenience of having
          everything you need on wheels, from cozy sleeping quarters to
          fully-equipped kitchens. Say goodbye to rigid itineraries and hello to
          endless possibilities with camper vans.
        </Description>
        <ButtonWrapper>
          <Button
            style={{ backgroundColor: 'rgb(255, 153, 51)' }}
            onClick={() => navigate('/catalog')}
          >
            Go searching
          </Button>
        </ButtonWrapper>
      </DescriptionWrapper>
    </BackgroundWrapper>
  );
};

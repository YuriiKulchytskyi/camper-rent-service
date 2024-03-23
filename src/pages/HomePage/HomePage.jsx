import { Button } from 'components/Card/Card/Card.styled';
import { Header } from 'components/Header/Header';
import { ButtonWrapper} from './HomePage.styled';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <ButtonWrapper>
        <Button onClick={()=> navigate('/catalog')}>Go searching</Button>
      </ButtonWrapper>

    </>
  );
};

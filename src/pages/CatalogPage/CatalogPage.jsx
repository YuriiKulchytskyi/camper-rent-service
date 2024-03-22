import { Header } from 'components/Header/Header';
import { List } from 'components/List/List';
import datebase from '../../db/datebase.json';
import {
  CardHolder,
  Container,
  MainWrapper,
} from 'components/App.styled';
import { SideMenu } from 'components/SideMenu/SideMenu';

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <Container>
        <MainWrapper>
          <SideMenu />
          <CardHolder>
            <List datebase={datebase} />
          </CardHolder>
        </MainWrapper>
      </Container>
    </>
  );
};

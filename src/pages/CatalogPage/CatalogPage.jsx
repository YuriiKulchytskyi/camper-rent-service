import { Header } from 'components/Header/Header';
import { List } from 'components/List/List';
import { CardHolder, Container, MainWrapper } from 'components/App.styled';
import { SideMenu } from 'components/SideMenu/SideMenu';
// import Filter from '../../components/SideMenu/FiltersComponent';
import { BackgroundWrapper } from './Catalog.styled';

export const CatalogPage = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <Container>
        <MainWrapper>
          <SideMenu />
          <CardHolder>
            <List />
          </CardHolder>
        </MainWrapper>
      </Container>
    </BackgroundWrapper>
  );
};

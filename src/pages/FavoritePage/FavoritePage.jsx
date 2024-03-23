import { Card } from 'components/Card/Card/Card';
import { Header } from 'components/Header/Header';
import { ListofItems } from 'components/List/List.styled';
import { useSelector } from 'react-redux';
import { FavoriteWrapper, ListWrapper } from './FavoritePage.styled';

export const FavoritePage = () => {
  const favorites = useSelector(state => state.adverts.favorites);

  return (
    <>
      <Header />
      <FavoriteWrapper>
        <ListWrapper>
          <ListofItems>
            {favorites.map(favorite => (
              <Card key={favorite._id} card={favorite} onClick={() => {}} /> // Рендеримо компонент Card для кожного об'єкту улюблених карток
            ))}
          </ListofItems>
        </ListWrapper>
      </FavoriteWrapper>
    </>
  );
};

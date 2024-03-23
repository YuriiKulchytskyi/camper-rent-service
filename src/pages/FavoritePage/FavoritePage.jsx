import { Header } from 'components/Header/Header';
import { ListofItems } from 'components/List/List.styled';
import { useSelector } from 'react-redux';

export const FavoritePage = () => {
  const favorites = useSelector(state => state.adverts.favorites);

  return (
    <>
      <Header />
      <ListofItems>
        {favorites.map(favorite => (
          <li key={favorite._id}>
          </li>
        ))}
      </ListofItems>
    </>
  );
};

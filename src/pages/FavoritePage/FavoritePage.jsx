import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card/Card';
import { Header } from 'components/Header/Header';
import { ListofItems } from 'components/List/List.styled';
import {
  BackgroundWrapper,
  FavoriteWrapper,
  ImageWrapper,
  ListWrapper,
  ReturnButton,
  SvgCamper,
} from './FavoritePage.styled';
import { useNavigate } from 'react-router-dom';
import icons from '../../images/icons.svg';

export const FavoritePage = () => {
  const favoritesIds = Object.keys(localStorage).filter(key =>
    key.startsWith('favorite_')
  );
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

useEffect(() => {
  const storedFavorites = favoritesIds
    .map(id => {
      const favoriteString = localStorage.getItem(id);
      if (favoriteString) {
        try {
          const favorite = JSON.parse(favoriteString);
          if (favorite && favorite._id) {
            return favorite;
          }
        } catch (error) {
          console.error('Error parsing favorite:', error);
        }
      }
      return null;
    })
    .filter(favorite => favorite !== null);


  if (JSON.stringify(storedFavorites) !== JSON.stringify(favorites)) {
    setFavorites(storedFavorites);
  }
}, [favoritesIds, favorites]); 
  const handleDislike = id => {
    localStorage.removeItem(`favorite_${id}`);
    const updatedFavorites = favorites.filter(favorite => favorite._id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <BackgroundWrapper>
      <Header />
      <FavoriteWrapper>
        <ListWrapper>
          {favorites.length === 0 ? (
            <ImageWrapper>
              <SvgCamper>
                <use href={`${icons}#icon-camper`}></use>
              </SvgCamper>
              You've definitely missed something that would work for you
              <ReturnButton onClick={() => navigate('/catalog')}>
                Go back to catalog
              </ReturnButton>
            </ImageWrapper>
          ) : (
            <ListofItems>
              {favorites.map(favorite => (
                <Card
                  key={favorite._id}
                  card={favorite}
                  onRemove={handleDislike}
                />
              ))}
            </ListofItems>
          )}
        </ListWrapper>
      </FavoriteWrapper>
    </BackgroundWrapper>
  );
};

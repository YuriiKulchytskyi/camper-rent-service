import { Card } from 'components/Card/Card/Card';
import { ListofItems, LoadMoreBtn } from './List.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/advert/advertOperations';
import { getAdverts } from '../../redux/advert/advertSelectors';

export const List = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);


  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  return (
    <>
      <ListofItems>
        {adverts.slice(0, visibleItems).map(item => (
          <Card key={item._id} card={item} />
        ))}
        {visibleItems < adverts.length && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </ListofItems>
    </>
  );
};

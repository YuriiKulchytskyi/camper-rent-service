import { Card } from 'components/Card/Card/Card';
import { ListofItems, LoadMoreBtn } from './List.styled';
import { useEffect, useState } from 'react';
import Modal from 'components/Card/ModalCard/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/advert/advertOperations';
import { getAdverts } from '../../redux/advert/advertSelectors';

export const List = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const openModal = item => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem();
  };

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  return (
    <>
      <ListofItems>
        {adverts.slice(0, visibleItems).map(item => (
          <Card key={item._id} card={item} onClick={() => openModal(item)} />
        ))}
        {visibleItems < adverts.length && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </ListofItems>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </>
  );
};

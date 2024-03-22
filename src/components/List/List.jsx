import { Card } from 'components/Card/Card/Card';
import { ListofItems, LoadMoreBtn } from './List.styled';
import { useState } from 'react';
import Modal from 'components/Card/ModalCard/Modal';

export const List = ({ datebase }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [selectedItem, setSelectedItem] = useState();

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
        {datebase.slice(0, visibleItems).map(item => (
          <Card key={item._id} card={item} onClick={() => openModal(item)} />
        ))}
        {visibleItems < datebase.length && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </ListofItems>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal}  />}
      {/* Відображення модального вікна */}
    </>
  );
};

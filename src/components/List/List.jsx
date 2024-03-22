import { Card } from 'components/Card/Card/Card';
import { ListofItems, LoadMoreBtn } from './List.styled';
import { useState } from 'react';
// import { ModalCard } from 'components/Card/ModalCard/ModalCard';
import { Modal } from 'components/Modal';

export const List = ({ datebase }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);

  const openModal = item => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  return (
    <ListofItems>
      {datebase.slice(0, visibleItems).map(item => (
        <Card
          id={item._id}
          key={item._id}
          openModal={openModal}
          gallery={item.gallery[0]}
          name={item.name}
          price={item.price}
          rate={item.rating}
          location={item.location}
          adults={item.adults}
          transmission={item.transmission}
          engine={item.engine}
          kitchen={item.details.kitchen}
          beds={item.details.beds}
          airConditioner={item.details.airConditioner}
          description={item.description}
          reviews={item.reviews.length}
        />
      ))}
      {/* {selectedItem && ( // Перевіряємо, чи вибрано елемент
        <Modal onClose={closeModal} id={selectedItem.id} /> // Відкриваємо модальне вікно і передаємо дані вибраного елемента
      )} */}
      {visibleItems < datebase.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </ListofItems>
  );
};

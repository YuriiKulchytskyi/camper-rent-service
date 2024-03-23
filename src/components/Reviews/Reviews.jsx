import { ReviewCard } from './ReviewCard';
import { ReviewHolder } from './Reviews.styled';

export const Reviews = ({ item }) => {
  return (
    <div>
      <ReviewHolder>
        {item.reviews.map((review, index) => (
          <li key={index}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ReviewHolder>
    </div>
  );
};

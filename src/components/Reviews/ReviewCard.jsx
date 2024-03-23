import {
  Avatar,
  Holder,
  NameContainer,
  NameHolder,
  Review,
  ReviewContainer,
  StarList,
  StarSvg,
} from './Reviews.styled';
import icons from '../../images/icons.svg';
export const ReviewCard = ({ review }) => {
  const yellowStars = Math.floor(review.reviewer_rating);
  const greyStars = 5 - yellowStars;

  return (
    <ReviewContainer>
      <NameContainer>
        <Avatar>{review.reviewer_name.split('')[0]}</Avatar>
        <Holder>
          <NameHolder>
            {review.reviewer_name}
            <StarList>
              {[...Array(yellowStars)].map((_, index) => (
                <li key={index}>
                  <StarSvg>
                    <use href={`${icons}#icon-star`}></use>
                  </StarSvg>
                </li>
              ))}
              {[...Array(greyStars)].map((_, index) => (
                <li key={index}>
                  <StarSvg>
                    <use href={`${icons}#icon-star-grey`}></use>{' '}
                      </StarSvg>
                </li>
              ))}
            </StarList>
          </NameHolder>
        </Holder>
      </NameContainer>
      <Review>{review.comment}</Review>
    </ReviewContainer>
  );
};

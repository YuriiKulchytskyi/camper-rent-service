import {
  LocationInput,
  LocationWrapper,
  InputSvgWrapper,
  InputIcon,
  LocationTitle,
} from './Location.styled';
import icons from '../../../images/icons.svg'

export const Location = () => {
  return (
    <LocationWrapper>
      <LocationTitle>Location</LocationTitle>
      <InputSvgWrapper>
        <LocationInput />
        <InputIcon>
          <use href={`${icons}#icon-map-pin`}></use>
        </InputIcon>
      </InputSvgWrapper>
    </LocationWrapper>
  );
};

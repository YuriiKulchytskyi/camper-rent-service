import { NavLink } from 'react-router-dom';
import { HeaderSvg, HeaderWrapper, NavList, NavMenu } from './Header.styled';
import icons from '../../images/icons.svg';

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavMenu>
        <NavList>
          <NavLink to={'/home'}>
            <HeaderSvg>
              <use href={`${icons}#icon-home`}></use>
            </HeaderSvg>
          </NavLink>
          <NavLink to={'/catalog'}>
            <HeaderSvg>
              <use href={`${icons}#icon-camper`}></use>
            </HeaderSvg>
          </NavLink>
          <NavLink to={'/favorites'}>
            <HeaderSvg>
              <use href={`${icons}#icon-heart-red`}></use>
            </HeaderSvg>
          </NavLink>
        </NavList>
      </NavMenu>
    </HeaderWrapper>
  );
};

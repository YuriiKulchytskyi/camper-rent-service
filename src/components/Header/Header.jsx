import { NavLink } from 'react-router-dom';
import { HeaderWrapper, NavList, NavMenu } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavMenu>
        <NavList>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/catalog'}>Catalog</NavLink>
          <NavLink to={'/favorites'}>Favourite</NavLink>
        </NavList>
      </NavMenu>
    </HeaderWrapper>
  );
};

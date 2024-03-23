import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

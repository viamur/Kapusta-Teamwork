import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

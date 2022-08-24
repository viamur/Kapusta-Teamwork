import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';
import { useSelector } from 'react-redux';
import Balance from 'components/Balance/Balance';

const SharedLayout = () => {
  // const token = useSelector();
  const token = true;
  return (
    <>
      <Header />
      <main className={token ? s.mainAuth : s.main}>
        <section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Balance />
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;

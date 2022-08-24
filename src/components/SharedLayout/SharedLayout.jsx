import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <section>
          <Container>
            <Suspense fallback={Loader}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;

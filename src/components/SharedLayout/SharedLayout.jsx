import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';

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
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Modal/>
    </>
  );
};

export default SharedLayout;

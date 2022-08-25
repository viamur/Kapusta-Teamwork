import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';
// import { useSelector } from 'react-redux';
// import { token } from '../../utils/api';
const SharedLayout = () => {
  // const tokenT = useSelector();

  const token = true;
  return (
    <>
      <Header />
      <main className={token ? s.mainAuth : s.main}>
        <section>
          {/* {pathname === '/autn' && <p>hello</p>} */}
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;

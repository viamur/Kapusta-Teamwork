import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from 'redux/auth/AuthSelectors';
import { useEffect } from 'react';
import { getAuthUser } from 'redux/auth/authOperations';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = useSelector(getAuthToken);

  useEffect(() => {
    if (pathname === '/') {
      token ? navigate('transactions') : navigate('auth');
    }
  }, []);
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
    </>
  );
};

export default SharedLayout;

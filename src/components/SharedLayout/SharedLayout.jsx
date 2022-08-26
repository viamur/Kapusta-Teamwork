import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from 'redux/auth/AuthSelectors';
import { useEffect } from 'react';
import { getAuthUser } from 'redux/auth/authOperations';
import { googleAuth } from '../../redux/auth/AuthSlice';

const SharedLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const token = useSelector(getAuthToken);

  useEffect(() => {
    if (pathname === '/') {
      const accessToken = searchParams.get('accessToken');
      const refreshToken = searchParams.get('refreshToken');
      const sid = searchParams.get('sid');
      if (accessToken) {
        dispatch(googleAuth({ accessToken, refreshToken, sid }));
        dispatch(getAuthUser());
      }
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
      <Modal/>
    </>
  );
};

export default SharedLayout;

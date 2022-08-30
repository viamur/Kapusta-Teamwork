import AuthGoogle from '../../components/AuthForm/AuthGoogle';
import AuthForm from '../../components/AuthForm/AuthForm';
import icon from '../../images/icon.svg';
import React from 'react';
import { useSelector } from 'react-redux';
import s from './AuthPage.module.scss';
import { getAuthIsLoading } from 'redux/auth/AuthSelectors';
import Loader from 'components/Loader/Loader';

// import Notiflix from 'notiflix';

const AuthPage = () => {
  const isLoading = useSelector(getAuthIsLoading);
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.title}>
          <svg className={s.svg}>
            <use href={`${icon}#icon-logo`} />
          </svg>
          <h2 className={s.subtitle}>Smart Finance</h2>
        </div>
        <div className={s.authBlock}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <p className={s.textA}>You can log in with your Google Account:</p>
              <AuthGoogle />
              <p className={s.textB}>Or log in using an email and password, after registering:</p>
              <AuthForm />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;

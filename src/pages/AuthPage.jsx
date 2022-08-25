import AuthGoogle from '../components/AuthForm/AuthGoogle';
import AuthForm from '../components/AuthForm/AuthForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Notiflix from 'notiflix';

const AuthPage = () => {
  const errorAlert = useSelector(state => state?.auth?.error);
  useEffect(() => {
    if (!errorAlert) {
      return;
    }
    Notiflix.Notify.failure(errorAlert);
  }, [errorAlert]);
  return (
    <>
      <div>
        <div>
          <p>Вы можете авторизоваться с помощью Google Account:</p>
          <AuthGoogle />
          <p>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default AuthPage;

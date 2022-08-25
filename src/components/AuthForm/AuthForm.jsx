import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login, register } from '../../redux/auth/operations';

const AuthForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validate = values => {
    const errors = {};
    const regexEmail = /^[a-z0-9._%+-]{2,}@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/i;
    if (!values.email) {
      errors.email = 'Это обязательное поле';
    } else if (!regexEmail.test(values.email)) {
      errors.email =
        'Email может содержать латинские буквы, цифры, точка, дефис, подчеркивание, @,';
    } else if (email.indexOf('-') === 0 || email.endsWith('-')) {
      errors.email = 'Дефис не может находиться в начале или в конце Email';
    } else if (email.length < 10) {
      errors.email = 'Минимальное количество символов в поле - 10';
    } else if (email.length > 63) {
      errors.email = 'Максимальное количество символов в поле - 63';
    }
    if (!values.password) {
      errors.password = 'Это обязательное поле';
    } else if (password.length < 7) {
      errors.password = 'Пароль должен содержать минимум 7 символов';
    } else if (password.length > 12) {
      errors.password = 'Пароль должен содержать максимум 12 символов';
    } else if (!regexPassword.test(values.password)) {
      errors.password = 'Пароль должен содержать буквы и цифры';
    }
    return errors;
  };

  const onBtnClick = value => {};
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    let submitter = e.nativeEvent.submitter;
    if (submitter.name === 'login') {
      const errors = validate({ email, password });
      setFormErrors(errors);

      if (!errors.email && !errors.password) {
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
      }
    }

    if (submitter.name === 'registration') {
      const errors = validate({ email, password });
      setFormErrors(errors);

      if (!errors.email && !errors.password) {
        dispatch(register({ email, password }));
        setEmail('');
        setPassword('');
      }
    }
  };

  const canceler = e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>
          {formErrors.email && <span>*</span>}
          Электронная почта:
        </p>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={handleChangeEmail}
          onKeyDown={canceler}
          autoComplete="on"
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </label>
      <label>
        <p>
          {formErrors.password && <span>*</span>}
          Пароль:
        </p>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={handleChangePassword}
          onKeyDown={canceler}
          autoComplete="off"
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </label>
      <div>
        <button type="submit" onClick={onBtnClick(e => 'log')}>
          Login
        </button>
        <button type="submit" onClick={onBtnClick}>
          Registration
        </button>
      </div>
    </form>
  );
};

export default AuthForm;

import React from 'react';
import { useDispatch } from 'react-redux';
import { googleLogin } from 'redux/auth/authOperations';
import icon from '../../images/icon.svg';
import s from './AuthGoogle.module.scss';

const AuthGoogle = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(googleLogin());
  };

  return (
    <a target="_blank" href="https://kapusta-backend.goit.global/auth/google" className={s.link}>
      <svg width={18} height={18} className={s.svg}>
        <use href={`${icon}#icon-google_symbol1`} />
      </svg>
      <span className={s.span}>Google</span>
    </a>
  );
};

export default AuthGoogle;

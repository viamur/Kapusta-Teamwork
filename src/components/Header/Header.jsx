import { Link } from 'react-router-dom';

import icon from '../../images/icon.svg';
import s from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
<<<<<<< HEAD
// import Modal from 'components/Modal/Modal';



// import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch, useSelector } from 'react-redux';
import { getAuthEmail, getAuthToken } from 'redux/auth/AuthSelectors';
import { logOut } from 'redux/auth/authOperations';
>>>>>>> f3943e4fc3fbfdf9d9abdbffe152c112bcd662b2

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(getAuthEmail);

  const emailNormaliza = email && email.split('')[0];

  const mob = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={email ? '/transactions' : '/auth'} className={s.link}>
          <svg width={90} height={31}>
            <use href={`${icon}#icon-logo_kapusta`} />
          </svg>
        </Link>
        {email && (
          <div className={s.wrap}>
            <span className={s.span}>{emailNormaliza}</span>
            {!mob && <p className={s.name}>{email}</p>}
            <button
              type="button"
              className={s.btn}
              onClick={() => dispatch(logOut())}
            >
              {mob ? (
                <svg width={16} height={16}>
                  <use href={`${icon}#icon-logout1`} />
                </svg>
              ) : (
                <p className={s.exit}>Exit</p>
              )}
            </button>
          </div>
        )}
      </div>
      <Modal title={"leave"} onClose={onClose}/>
    </header>
  );
};
export default Header;

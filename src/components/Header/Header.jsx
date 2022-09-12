import { Link } from 'react-router-dom';
import icon from '../../images/icon.svg';
import s from './Header.module.scss';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { getAuthEmail } from 'redux/auth/AuthSelectors';
import { logOut } from 'redux/auth/authOperations';
import Modal from 'components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const email = useSelector(getAuthEmail);

  const emailNormaliza = email && email.split('')[0];

  const [showModal, setShowModal] = useState(false);

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
              onClick={() => setShowModal(true)}
            >
              {mob ? (
                <svg width={16} height={16}>
                  <use href={`${icon}#icon-logout1`} />
                </svg>
              ) : (
                <p className={s.exit}>Exit</p>
              )}
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {showModal && (
              <Modal
                ChildComponent
                title={'Do you really want to leave?'}
                setShowModal={setShowModal}
                cb={logOut}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

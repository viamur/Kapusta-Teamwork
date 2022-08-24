import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../vremeno/logo.svg';
import logout from '../../vremeno/logout.svg';
import { useMediaQuery } from 'react-responsive';
// import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch();
  // const email = useSelector();
  // const auth = useSelector();
  /* email и auth снизу это заглушки после подкл useSelector удалить */
  const email = 'viamur@gmail.com';
  const auth = true;
  const emailNormaliza = email.split('')[0];

  const mob = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.link}>
          <img src={logo} className={s.imgLogo} />
        </Link>
        {auth && (
          <div className={s.wrap}>
            <span className={s.span}>{emailNormaliza}</span>
            {!mob && <p className={s.name}>{email}</p>}
            <button type="button" className={s.btn}>
              {mob ? (
                <img src={logout} alt="logout" className={s.imgBtn} />
              ) : (
                <p className={s.exit}>Exit</p>
              )}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;

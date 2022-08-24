import BalanceModal from 'components/BalanceModal/BalanceModal';

import { Link } from 'react-router-dom';
import icon from '../../images/icon.svg';
import s from './Balance.module.scss';
import BalanceForm from '../BalanceForm/BalanceForm';

const Balance = () => {
  return (
    <section className={s.section}>
      <Link to="/reports" className={s.btn}>
        Reports
        <svg width={24} height={24} className={s.svg}>
          <use href={`${icon}#icon-bar_chart-24px1`} />
        </svg>
      </Link>
      <BalanceForm/>
    </section>
  );
};

export default Balance;

import { Link } from 'react-router-dom';
import s from './TransactionsMobBtn.module.scss';

const TransactionsMobBtn = () => {
  return (
    <div className={s.wrap}>
      <Link to={'/transactions/expenses'} className={s.link}>
        Expenses
      </Link>
      <Link to={'/transactions/income'} className={s.link}>
        Income
      </Link>
    </div>
  );
};

export default TransactionsMobBtn;

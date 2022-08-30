import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  expenseCategoriesThunk,
  getExpenseThunk,
  getIncomeThunk,
  incomeCategoriesThunk,
} from 'redux/transactions/transactionsOperations';
import { getAuthEmail } from 'redux/auth/AuthSelectors';
import {
  getTransactionsExpenseCategories,
  getTransactionsExpenses,
  getTransactionsIncomeCategories,
  getTransactionsIncomes,
} from 'redux/transactions/transactionsSelector';
import Balance from 'components/Balance/Balance';
import MyDate from 'components/MyDate/MyDate';
import IncomeForm from 'components/IncomeForm/IncomeForm';
import TransactionsMobBtn from '../../components/TransactionsMobBtn/TransactionsMobBtn';
import s from './TransactionsPage.module.scss';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import GooBack from 'components/GooBack/GooBack';
import Summary from 'components/Summary/Summary';

const TransactionsPage = () => {
  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  const desk = useMediaQuery({ query: '(min-width: 1279.5px)' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { transType } = useParams();
  const pageIncome = transType === 'income';
  const pageExpenses = transType === 'expenses';

  const email = useSelector(getAuthEmail);
  const incomesData = useSelector(getTransactionsIncomes);
  const expensesData = useSelector(getTransactionsExpenses);
  const incomesCategories = useSelector(getTransactionsIncomeCategories);
  const expensesCategories = useSelector(getTransactionsExpenseCategories);

  useEffect(() => {
    if (email) {
      if (!mob && pageIncome) {
        incomesData.length === 0 && dispatch(getIncomeThunk());
        !incomesCategories && dispatch(incomeCategoriesThunk());
        return;
      }
      if (!mob && pageExpenses) {
        expensesData.length === 0 && dispatch(getExpenseThunk());
        !expensesCategories && dispatch(expenseCategoriesThunk());
        return;
      }
      if (!mob && (!pageExpenses || !pageExpenses)) {
        navigate('/transactions/income');
        return;
      }
      if (mob) {
        if (!pageExpenses & !pageIncome & (transType !== undefined)) {
          navigate('/transactions/');
          return;
        }
        if (pageIncome) {
          !incomesCategories && dispatch(incomeCategoriesThunk());
        }
        if (pageExpenses) {
          !expensesCategories && dispatch(expenseCategoriesThunk());
        }
        incomesData.legth === 0 && dispatch(getIncomeThunk());
        expensesData.legth === 0 && dispatch(getExpenseThunk());
      }
    }
    // eslint-disable-next-line
  }, [transType, email]);

  return (
    <>
      {mob && !pageExpenses && !pageIncome && (
        <>
          <Balance />
          <div className={s.data}>
            <MyDate />
          </div>
          <TransactionsTable mob={mob} />
          <TransactionsMobBtn />
        </>
      )}
      {mob && (pageExpenses || pageIncome) && (
        <div className={s.mobMrgin}>
          <GooBack />
          <IncomeForm />
        </div>
      )}
      {!mob && (
        <>
          <Balance />
          <div className={s.transactions}>
            <div className={s.wrap}>
              <nav className={s.nav}>
                <NavLink
                  className={pageExpenses ? s.linkActive : s.link}
                  to={'/transactions/expenses'}
                >
                  Expenses
                </NavLink>
                <NavLink className={pageIncome ? s.linkActive : s.link} to={'/transactions/income'}>
                  income
                </NavLink>
              </nav>
              <IncomeForm />
              <div className={s.tableAndSummery}>
                <TransactionsTable mob={mob} pageIncome={pageIncome} pageExpenses={pageExpenses} />
                {desk && <Summary />}
              </div>
            </div>
          </div>
          {!desk && !mob && <Summary />}
        </>
      )}
    </>
  );
};

export default TransactionsPage;

import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
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
  getTransactionsIsLoading,
} from 'redux/transactions/transactionsSelector';
import Balance from 'components/Balance/Balance';
import MyDate from 'components/MyDate/MyDate';
import TransactionsMobBtn from '../../components/TransactionsMobBtn/TransactionsMobBtn';
import s from './TransactionsPage.module.scss';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';

const dat = {
  'Доп. доход': 'dop dohod',
  'З/П': 'Z/P',
};

const product = {
  Продукты: 'Product',
  Транспорт: 'Transport',
  Здоровье: 'Zdorove',
  'Спорт и хобби': 'Sport i Hobby',
};
const TransactionsPage = () => {
  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { transType } = useParams();
  const pageIncome = transType === 'income';
  const pageExpenses = transType === 'expenses';

  const email = useSelector(getAuthEmail);
  const incomesData = useSelector(getTransactionsIncomes);
  const expensesData = useSelector(getTransactionsExpenses);
  const isLoading = useSelector(getTransactionsIsLoading);
  const incomesCategories = useSelector(getTransactionsIncomeCategories);
  const expensesCategories = useSelector(getTransactionsExpenseCategories);

  useEffect(() => {
    if (email) {
      if (!mob & pageIncome) {
        !incomesData && dispatch(getIncomeThunk());
        !incomesCategories && dispatch(incomeCategoriesThunk());
        return;
      }
      if (!mob & pageExpenses) {
        !expensesData && dispatch(getExpenseThunk());
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
        !incomesData && dispatch(getIncomeThunk());
        !expensesData && dispatch(getExpenseThunk());
      }
    }
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
      {!mob && (
        <>
          <Balance />
          <TransactionsTable mob={mob} pageIncome={pageIncome} pageExpenses={pageExpenses} />
        </>
      )}

      {/* изменять данные снизу только! */}
      {!mob && (
        <>
          <NavLink style={{ fontSize: '20px' }} to={'/transactions/income'}>
            Incomes ccылка от дестопа
          </NavLink>
          <NavLink style={{ fontSize: '20px' }} to={'/transactions/expenses'}>
            expenses ссылка от дестопа
          </NavLink>
        </>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {pageIncome &&
            incomesData &&
            incomesData.map(el => <p key={el['_id']}>{dat[el.category]} </p>)}
          {pageExpenses &&
            expensesData &&
            expensesData.map(el => <p key={el['_id']}>{product[el.category]}</p>)}
        </>
      )}
    </>
  );
};

export default TransactionsPage;

import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getTransactionsDate,
  getTransactionsExpenses,
  getTransactionsIncomes,
} from 'redux/transactions/transactionsSelector';
import s from './TransactionsTable.module.scss';

const LENGTH_DATA = 20;

const TransactionsTable = ({ mob, pageIncome, pageExpenses }) => {
  const [data, setData] = useState(() => Array(20).fill(null));

  const incomesData = useSelector(getTransactionsIncomes);
  const expensesData = useSelector(getTransactionsExpenses);
  const dateList = useSelector(getTransactionsDate);
  // const dateList = '2022-08-25';

  useEffect(() => {
    if (mob && incomesData && expensesData) {
      const newData = [...incomesData, ...expensesData]
        .filter(el => el.date === dateList)
        .sort((a, b) => b['_id'].localeCompare(a['_id']));
      setData(newData);
      return;
    }
    if (!mob && pageIncome && incomesData) {
      const data = [...incomesData].filter(el => el.date === dateList);
      const length = LENGTH_DATA - data.length;
      const newData =
        length > 0 ? [...data, ...Array(length).fill(null)] : data;
      setData(newData);
      return;
    }
    if (!mob && pageExpenses && expensesData) {
      const data = [...expensesData].filter(el => el.date === dateList);
      const length = LENGTH_DATA - data.length;
      const newData =
        length > 0 ? [...data, ...Array(length).fill(null)] : data;
      setData(newData);
      return;
    }
  }, [mob, pageExpenses, pageIncome, incomesData, expensesData, dateList]);

  return (
    <div className={!mob ? s.table : ''}>
      {!mob && (
        <div className={s.wrap}>
          <p className={s.date}>Date</p>
          <p className={s.desc}>Description</p>
          <p className={s.category}>Category</p>
          <p className={s.sum}>Sum</p>
        </div>
      )}
      <TransactionsList mob={mob} data={data} />
    </div>
  );
};

export default TransactionsTable;

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

// const data = [
//   {
//     _id: '63069536db7a810814030bc8',
//     description: 'За выходные',
//     amount: 5000,
//     date: '2022-08-25',
//     category: 'З/П',
//   },
//   {
//     _id: '63069604db7a810814030bcc',
//     description: 'Реклама',
//     amount: 700,
//     date: '2022-08-25',
//     category: 'Доп. доход',
//     expense: true,
//   },
//   {
//     _id: '63069611db7a810814030bcd',
//     description: 'Фриланс',
//     amount: 500,
//     date: '2022-08-25',
//     category: 'Доп. доход',
//     expense: false,
//   },
//   {
//     _id: '6306961cdb7a810814030bce',
//     description: 'Фриланс',
//     amount: 700,
//     date: '2022-08-25',
//     category: 'Доп. доход',
//     expense: false,
//   },
//   {
//     _id: '6308fe9adb7a810814030ff4',
//     description: 'Income description',
//     amount: 100,
//     date: '2020-12-31',
//     category: 'Доп. доход',
//     expense: true,
//   },
// ];
// const feake = Array(20).fill(null);
// const newData = [...data, ...feake];

const LENGTH_DATA = 20;

const TransactionsTable = ({ mob, pageIncome, pageExpenses }) => {
  const [data, setData] = useState(() => Array(20).fill(null));

  const incomesData = useSelector(getTransactionsIncomes);
  const expensesData = useSelector(getTransactionsExpenses);
  const dateList = useSelector(getTransactionsDate);
  // const dateList = '2022-08-30';

  useEffect(() => {
    if (mob && incomesData && expensesData) {
      const newData = [...incomesData, ...expensesData].filter(el => el.date === dateList);
      setData(newData);
      return;
    }
    if (!mob && pageIncome && incomesData) {
      const data = [...incomesData].filter(el => el.date === dateList);
      const length = LENGTH_DATA - data.length;
      const newData = length > 0 ? [...data, ...Array(length).fill(null)] : data;
      setData(newData);
      return;
    }
    if (!mob && pageExpenses && expensesData) {
      const data = [...expensesData].filter(el => el.date === dateList);
      const length = LENGTH_DATA - data.length;
      const newData = length > 0 ? [...data, ...Array(length).fill(null)] : data;
      setData(newData);
      return;
    }
  }, [mob, pageExpenses, pageIncome, incomesData, expensesData]);

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

import TransactionsList from 'components/TransactionsList/TransactionsList';
import s from './TransactionsTable.module.scss';

const data = [
  {
    _id: '63069536db7a810814030bc8',
    description: 'За выходные',
    amount: 5000,
    date: '2022-08-25',
    category: 'З/П',
  },
  {
    _id: '63069604db7a810814030bcc',
    description: 'Реклама',
    amount: 700,
    date: '2022-08-25',
    category: 'Доп. доход',
    expense: true,
  },
  {
    _id: '63069611db7a810814030bcd',
    description: 'Фриланс',
    amount: 500,
    date: '2022-08-25',
    category: 'Доп. доход',
    expense: false,
  },
  {
    _id: '6306961cdb7a810814030bce',
    description: 'Фриланс',
    amount: 700,
    date: '2022-08-25',
    category: 'Доп. доход',
    expense: false,
  },
  {
    _id: '6308fe9adb7a810814030ff4',
    description: 'Income description',
    amount: 100,
    date: '2020-12-31',
    category: 'Доп. доход',
    expense: true,
  },
];
const feake = Array(20).fill(null);
const newData = [...data, ...feake];

const TransactionsTable = ({ mob, pageIncome, pageExpenses }) => {
  return (
    <div className={s.vremeno}>
      <div className={!mob && s.table}>
        {!mob && (
          <div className={s.wrap}>
            <p className={s.date}>Date</p>
            <p className={s.desc}>Description</p>
            <p className={s.category}>Category</p>
            <p className={s.sum}>Sum</p>
          </div>
        )}
        <TransactionsList mob={mob} data={newData} />
      </div>
    </div>
  );
};

export default TransactionsTable;

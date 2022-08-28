import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';

import data from './month.json';
import s from './Summary.module.scss';

import * as selectors from '../../redux/transactions/transactionsSelector';
import { useState } from 'react';

const Summary = () => {
  const { transType } = useParams();
  const [data, setData] = useState([]);
  const pageExpenses = transType === 'expenses';
  const pageIncome = transType === 'income';

  const incomes = useSelector(selectors.getTransactionsMonthsIncomes);
  const expenses = useSelector(selectors.getTransactionsMonthsExpenses);

  useEffect(() => {
    if (pageExpenses && expenses) {
      const expensesArr = Object.entries(expenses);
      setData(expensesArr);
      return;
    }
    if (pageIncome && incomes) {
      const incomesArr = Object.entries(incomes);
      setData(incomesArr);
      return;
    }
  }, [pageExpenses, pageIncome, incomes, expenses]);
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Summary</h4>
      <ul className={s.summaryList}>
        {data
          .filter(([test1, test2]) => test2 !== 'N/A')
          .map(([test1, test2], index) => (
            <li key={index} className={s.summaryItem}>
              <p>{test1}</p>
              <p className={s.summarySumm}>{test2} .00 uah</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;

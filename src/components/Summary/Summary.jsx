import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import translateMonths from './month';
import { useParams } from 'react-router-dom';

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

  const currentDate = useRef(new Date().getMonth());

  useEffect(() => {
    if (pageExpenses && expenses) {
      const expensesArr = Object.entries(expenses);

      const filteredExpenses = expensesArr.filter((el, index) => index <= currentDate.current);
      setData(filteredExpenses);
      return;
    }
    if (pageIncome && incomes) {
      const incomesArr = Object.entries(incomes);
      const filteredExpenses = incomesArr.filter((el, index) => index <= currentDate.current);
      setData(filteredExpenses);
      return;
    }
  }, [pageExpenses, pageIncome, incomes, expenses]);
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Summary</h4>
      <ul className={s.summaryList}>
        {data
          // .filter(([test1, test2]) => test2 !== 'N/A')
          .map(([test1, test2], index) => (
            <li key={index} className={s.summaryItem}>
              <p>{`${translateMonths[test1].name}`}</p>
              <p className={s.summarySumm}>
                {test2 === 'N/A' ? '00' : test2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                .00 uah
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;

import React from 'react';
import { useSelector } from 'react-redux';

import data from './month.json';
import s from './Summary.module.scss';

import * as selectors from '../../redux/transactions/transactionsSelector';

const Summary = ({ data }) => {
  //   const incomes = useSelector(selectors.getTransactionsMonthsIncomes);
  //   const expenses = useSelector(selectors.getTransactionsMonthsExpenses);
  const expenses = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };
  const incomes = {
    Январь: 500,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };
  const expensesArr = Object.entries(expenses);
  const incomesArr = Object.entries(incomes);

  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Summary</h4>
      <ul>
        {incomesArr
          .filter(el => el[1] !== 'N/A')
          .map((el, index) => (
            <li key={index} className={s.summaryItem}>
              <p>{el[0]}</p>
              <p className={s.summarySumm}>{el[1]}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;

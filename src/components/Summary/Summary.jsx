import React from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import data from './month.json';
import s from './Summary.module.scss';

import * as selectors from '../../redux/transactions/transactionsSelector';

const Summary = ({ data }) => {
  const incomes = useSelector(selectors.getTransactionsMonthsIncomes);
  const expenses = useSelector(selectors.getTransactionsMonthsExpenses);

  const expensesArr = Object.entries(expenses);
  //   const incomesArr = Object.entries(incomes);

  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Summary</h4>
      <ul>
        {expensesArr
          .filter(el => el[1] !== 'N/A')
          .map((el, index) => (
            <li key={index} className={s.summaryItem}>
              <p>{el[0]}</p>
              <NumberFormat
                className={s.summarySumm}
                value={el[1]}
                suffix={' UAH'}
                allowLeadingZeros={true}
                thousandSeparator={' '}
                decimalScale={2}
                placeholder={'00.00 UAH'}
                fixedDecimalScale={true}
                allowNegative={false}
              />
              {/* <p className={s.summarySumm}>{el[1]}</p> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;

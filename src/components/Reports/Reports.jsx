import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
//import { getPeriodTransactions } from '../../utils/api';
import ReportsHeader from '../ReportsHeader/ReportsHeader';
import ReportsCategories from '../ReportsCategories/ReportsCategories';
import {
  incomesMonthSelector,
  expensesMonthSelector,
} from '../../redux/reports/reportsSelectot';

// import s from './Reports.module.scss';

export default function Reports() {
  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});
  // const [subCategory, setsubCategory] = useState('');

  const incomesResponse = useSelector(incomesMonthSelector);
  const expensesResponse = useSelector(expensesMonthSelector);

  useEffect(() => {
    if (incomesResponse) setIncomes(incomesResponse);
    if (expensesResponse) setExpenses(expensesResponse);
  }, [expensesResponse, incomesResponse]);
  return (
    <>
      {/* {console.log(incomes)} */}
      <div>
        <ReportsHeader incomes={incomes} expenses={expenses} />
        <ReportsCategories incomes={incomes} expenses={expenses} />
        {/* <SomeComponent forPaint={subCategory} /> */}
      </div>
    </>
  );
}

import React from 'react';
import { useState, useEffect } from 'react';
//import { getPeriodTransactions } from '../../utils/api';
import ReportsHeader from '../ReportsHeader/ReportsHeader';
import ReportsCategories from '../ReportsCategories/ReportsCategories';
import {
  incomesMonthSelector,
  expensesMonthSelector,
} from '../../redux/reports/reportsSelectot';
import { useSelector } from 'react-redux';

// import s from './Reports.module.scss';

export default function Reports() {
  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});
  // const []
  const incomesResponse = useSelector(incomesMonthSelector);
  const expensesResponse = useSelector(expensesMonthSelector);

  useEffect(() => {
    if (incomesResponse) setIncomes(incomesResponse);
    if (expensesResponse) setExpenses(expensesResponse);

    // getPeriodTransactions('2022-07')
    //   .then(res => {
    //     setIncomes(res.data.incomes);
    //     setExpenses(res.data.expenses);
    //   })
    //   .catch(error => console.log(error));
  }, [expensesResponse, incomesResponse]);
  return (
    <>
      {/* {console.log(incomes)} */}
      <div>
        <ReportsHeader incomes={incomes} expenses={expenses} />
        <ReportsCategories incomes={incomes} expenses={expenses} />
      </div>
    </>
  );
}

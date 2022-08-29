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
import ChartCategory from '../../components/ChartCategory/ChartCategory';
import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
import { useMediaQuery } from 'react-responsive';

// import s from './Reports.module.scss';

export default function Reports() {
  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});
  const [curCategory, setCurCategory] = useState(null);

  const incomesResponse = useSelector(incomesMonthSelector);
  const expensesResponse = useSelector(expensesMonthSelector);

  const isMobile = useMediaQuery({
    query: '(min-width: 767px)',
  });

  useEffect(() => {
    if (incomesResponse) setIncomes(incomesResponse);
    if (expensesResponse) setExpenses(expensesResponse);
  }, [expensesResponse, incomesResponse]);
  return (
    <>
      {/* {console.log(incomes)} */}
      <div>
        <ReportsHeader incomes={incomes} expenses={expenses} />
        <ReportsCategories
          curCategory={curCategory}
          setCurCategory={setCurCategory}
          incomes={incomes}
          expenses={expenses}
        />

        {curCategory &&
          (isMobile ? (
            <ChartCategory curCategory={curCategory} />
          ) : (
            <ChartCategoryMobile curCategory={curCategory} />
          ))}
      </div>
    </>
  );
}

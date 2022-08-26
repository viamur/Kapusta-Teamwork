import Container from 'components/Container/Container';
import React from 'react';
import { useState, useEffect } from 'react';
import { getPeriodTransactions } from '../../utils/api';
import ReportsHeader from '../ReportsHeader/ReportsHeader';
import ReportsCategories from '../ReportsCategories/ReportsCategories';

// import s from './Reports.module.scss';

export default function Reports() {
  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});
  // const []

  useEffect(() => {
    getPeriodTransactions()
      .then(res => {
        setIncomes(res.incomes);
        setExpenses(res.expenses);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <Container>
        <ReportsHeader incomes={incomes} expenses={expenses} />
        <ReportsCategories incomes={incomes} expenses={expenses} />
      </Container>
    </div>
  );
}

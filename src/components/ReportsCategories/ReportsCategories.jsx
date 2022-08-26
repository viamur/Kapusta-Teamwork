import React from 'react';
import { useState } from 'react';
import s from './ReportsCategories.module.scss';
import icon from '../../images/icon.svg';
import ReportsCategoryList from 'components/ReportsCategoryList/ReportsCategoryList';

export default function ReportsCategories({ incomes, expenses }) {
  const [pickedState, setPickedState] = useState('EXPENSES');
  const [test, setTest] = useState(true);
  // let test = true;

  const togglePickedState = () => {
    setPickedState(prev => (prev === 'EXPENSES' ? 'INCOMES' : 'EXPENSES'));
    setTest(prev => (prev = !test));
  };
  console.log(test);
  return (
    <div className={s.reportsCategories}>
      <div className={s.toggle}>
        <span onClick={togglePickedState}>
          <svg width={10} height={10} className={s.svg}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </span>
        <p>{pickedState}</p>
        <span onClick={togglePickedState}>
          <svg width={10} height={10} className={s.svg}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </span>
      </div>
      <ReportsCategoryList test={test} incomes={incomes} expenses={expenses} />
    </div>
  );
}

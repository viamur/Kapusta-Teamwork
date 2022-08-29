import React from 'react';
import { useState } from 'react';
// import s from './ReportsCategories.module.scss';
import s from '../CategoryList/CategoryList.module.scss';
import icon from '../../images/icon.svg';
import ReportsCategoryList from 'components/ReportsCategoryList/ReportsCategoryList';
import ChartCategory from '../../components/ChartCategory/ChartCategory';
import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
import { useMediaQuery } from 'react-responsive';

export default function ReportsCategories({ incomes, expenses }) {
  const [pickedState, setPickedState] = useState('EXPENSES');
  const [changeState, setChangeState] = useState(true);
  const isMobile = useMediaQuery({
    query: '(min-width: 767px)',
  });

  const togglePickedState = () => {
    setPickedState(prev => (prev === 'EXPENSES' ? 'INCOMES' : 'EXPENSES'));
    setChangeState(prev => (prev = !changeState));
  };

  // console.log(changeState);
  return (
    <div className={s.backgroundCategoryList}>
      <div className={s.expenses}>
        <button className={s.titleBtn} onClick={togglePickedState}>
          <svg width={10} height={10} className={s.iconsExpenses}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </button>
        <h2 className={s.title}>{pickedState}</h2>
        <button className={s.titleBtn} onClick={togglePickedState}>
          <svg width={10} height={10} className={s.iconsExpenses}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </button>
      </div>
      <ReportsCategoryList
        changeState={changeState}
        incomes={incomes}
        expenses={expenses}
      />
      {isMobile ? (
        <ChartCategory incomes={incomes} expenses={expenses} />
      ) : (
        <ChartCategoryMobile incomes={incomes} expenses={expenses} />
      )}
    </div>
  );
}

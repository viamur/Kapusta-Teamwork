import React from 'react';
import s from './ReportsHeader.module.scss';

export default function ReportsHeader({ incomes, expenses }) {
  return (
    <div className={s.reportsHeder}>
      <div className={`${s.total} ${s.total__expenses}`}>
        <p>
          Expenses:
          <span>{expenses.expenseTotal} uah</span>
        </p>
      </div>
      <div className={`${s.total} ${s.total__incomes}`}>
        <p>
          Income:
          <span>{incomes.incomeTotal} uah</span>
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getExpenseCategories } from '../../utils/api';
import categories from '../../utils/catigores.json';

export default function ReportsCategoryList({ incomes, expenses }) {
  const [expensesArr, setExpensesArr] = useState([]);

  const transleteCategory = () => {
    return categories.map(el => ({
      ...el,
      data: expenses.expensesData[el.ru] || { total: 0 },
    }));
  };
  useEffect(() => {
    if (Object.keys(expenses).length)
      setExpensesArr(transleteCategory(expenses));
    console.log(expensesArr);
  }, [expenses]);

  return (
    <div>
      <ul>
        {expensesArr.map((el, id) => (
          <li key={id}>
            <span>{el.data.total} - </span>
            <span>ICON - </span>
            <span>{el.en} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import categoriesExpens from '../../utils/categoriesExpens.json';
import categoriesIncome from '../../utils/categoriesIncome.json';

export default function ReportsCategoryList({ incomes, expenses, test }) {
  const [expensesArr, setExpensesArr] = useState([]);
  const [incomesArr, setIncomesArr] = useState([]);

  const getTransleteExpensesCategory = () => {
    console.log(expenses);
    return categoriesExpens.map(el => ({
      ...el,
      data: expenses.expensesData[el.ru] || { total: 0 },
    }));
  };
  const getTransleteIncomesCategory = () => {
    return categoriesIncome.map(el => ({
      ...el,
      data: incomes.incomesData[el.ru] || { total: 0 },
    }));
  };

  useEffect(() => {
    if (Object.keys(expenses).length)
      setExpensesArr(getTransleteExpensesCategory(expenses));
    console.log(expenses);
    console.log(expensesArr);
  }, [expenses]);

  useEffect(() => {
    if (Object.keys(incomes).length)
      setIncomesArr(getTransleteIncomesCategory(incomes));
    console.log(incomes);
    console.log(incomesArr);
  }, [expenses]);

  return (
    <>
      {test ? (
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
      ) : (
        <div>
          <ul>
            {incomesArr.map((el, id) => (
              <li key={id}>
                <span>!!!!!! - </span>
                <span>ICON - </span>
                <span>!!!</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

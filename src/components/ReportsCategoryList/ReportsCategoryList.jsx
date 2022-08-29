import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import categoriesExpens from '../../utils/categoriesExpens.json';
import categoriesIncome from '../../utils/categoriesIncome.json';
import icon from '../../images/icon.svg';
import s from '../CategoryList/CategoryList.module.scss';

export default function ReportsCategoryList({
  incomes,
  expenses,
  changeState,
}) {
  const [expensesArr, setExpensesArr] = useState([]);
  const [incomesArr, setIncomesArr] = useState([]);

  const getTransleteExpensesCategory = () => {
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
    if (Object.keys(expenses).length) {
      setExpensesArr(getTransleteExpensesCategory(expenses));
      console.log(expensesArr);
    }
    // eslint-disable-next-line
  }, [expenses]);

  useEffect(() => {
    if (Object.keys(incomes).length)
      setIncomesArr(getTransleteIncomesCategory(incomes));
      // eslint-disable-next-line
  }, [incomes]);

  return (
    <div className={s.categoryListContainer}>
      {changeState ? (
        <ul className={s.categoryList}>
          {expensesArr.map((el, id) => (
            <li key={id} className={s.categoryListItem}>
              <p className={s.priceItem}>{el.data.total.toFixed(2)} </p>
              <div className={s.borderForIconRelative}>
                <div
                  className={`${s['borderForIcon' + el.icon]} 
                   ${s.borderForHover}
                   `}
                ></div>
                <svg className={s.iconFill} width={56} height={56}>
                  <use href={`${icon}#icon-${el.icon}`} />
                </svg>
              </div>
              <p className={s.discriptionItem}>{el.en}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={s.categoryList}>
          {incomesArr.map((el, id) => (
            <li key={id} className={s.categoryListItem}>
              <p className={s.priceItem}>{el.data.total.toFixed(2)} </p>
              <div className={s.borderForIconRelative}>
                <div
                  className={`${s['borderForIcon' + el.icon]} 
                   ${s.borderForHover}
                   `}
                ></div>
                <svg className={s.iconFill} width={56} height={56}>
                  <use href={`${icon}#icon-${el.icon}`} />
                </svg>
              </div>
              <span className={s.discriptionItem}>{el.en}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

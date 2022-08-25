import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../ExpensesListByCategory/ExpensesListByCategory.module.css';

const ExpensesListByCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector();

  return (
    <div>
      <ul className={s.ItemList}>
        {data &&
          data.map(item => (
            <li key={item.id} className={s.Item}>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  dispatch(item.name);
                }}
              ></button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExpensesListByCategory;

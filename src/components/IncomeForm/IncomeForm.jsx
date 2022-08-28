import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { options, castomOptions } from './filterOptions';
import MyDate from 'components/MyDate/MyDate';
// import GooBack from 'components/GooBack/GooBack';
import icon from '../../images/icon.svg';

import {
  expenseCategoriesThunk,
  incomeCategoriesThunk,
} from '../../redux/transactions/transactionsOperations';

import s from './IncomeForm.module.scss';

const IncomeForm = ({dateHandle}) => {
  const [product, setProduct] = useState('');
  const [sum, setSum] = useState('');
  const [productCategory, setProductCategory] = useState('');

  console.log(dateHandle);

  // const date=;
  const description = product;
  const category = productCategory.id;
  const amount = Number(sum);

  const dispatch = useDispatch();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { pathname } = useLocation();
  const transtype = pathname.slice(1);

  //? const { transType } = useParams();
  //? const pageIncome = transType === 'income';
  //? const pageExpenses = transType === 'expenses';

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'product':
        setProduct(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setProduct('');
    setProductCategory('');
    setSum('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const transaction = { description, category, amount };

    //  const transaction = { product, productId, sumNumber };

    console.log(transaction);

    transtype === 'income'
      ? dispatch(incomeCategoriesThunk(transaction))
      : dispatch(expenseCategoriesThunk(transaction));
    resetForm();
  };

  return (
    <div className={s.incForCont}>
      {isDesktopOrLaptop && <MyDate dateHandle={dateHandle} />}
      <div className={s.box}>
        <div className={s.formBox}>
          <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
            <label>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Product description"
                className={s.input}
                onChange={handleInputChange}
              />
            </label>
            <div className={s.filterBox}>
              <Select
                className={s.selected}
                placeholder="Product"
                options={options}
                styles={castomOptions}
                defaultValue={productCategory}
                onChange={setProductCategory}
              />
            </div>
            <div className={s.numberBox}>
              <label>
                <input
                  type="number"
                  name="sum"
                  value={sum}
                  placeholder="00.00 UAH"
                  className={s.inputNumber}
                  onChange={handleInputChange}
                />
              </label>
              <div className={s.image}>
                <svg width={20} height={20}>
                  <use href={`${icon}#icon-calculator`} />
                </svg>
              </div>
            </div>
            <div className={s.btnBox}>
              <button type="submit" className={s.btn}>
                input
              </button>
              <button type="input" className={s.btn} onClick={resetForm}>
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncomeForm;

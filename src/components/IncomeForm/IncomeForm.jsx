import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NumberFormat from 'react-number-format';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import {
  options,
  optionsTypeTrats,
  castomOptions,
  castomOptionsTablet,
} from './filterOptions';

import MyDate from 'components/MyDate/MyDate';
import icon from '../../images/icon.svg';
import {
  addIncomeThunk,
  addExpenseThunk,
} from '../../redux/transactions/transactionsOperations';
import s from './IncomeForm.module.scss';

const IncomeForm = () => {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [product, setProduct] = useState('');
  const [sum, setSum] = useState('');
  const [productCategory, setProductCategory] = useState('');

 

  //! данні для запиту
  const date = currentDate;
  const description = product;
  const category = productCategory.id;
  const amount = sum;

  const dispatch = useDispatch();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { transType } = useParams();
  const pageIncome = transType === 'income';
  const pageExpenses = transType === 'expenses';

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
    const transaction = { description, amount, date, category };

    if (pageIncome) {
      dispatch(addIncomeThunk(transaction));
    } else if (pageExpenses) {
      dispatch(addExpenseThunk(transaction));
    }
    resetForm();
  };

  return (
    <div className={s.incForCont}>
              <div className={s.MyDate}>
                {isDesktopOrLaptop && (
                  <MyDate />
                )}
              </div>
      <div className={s.box}>
        <div className={s.formBox}>
          <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
            <div className={s.IncomeForm}>

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

              <Select
                placeholder={pageIncome ? 'My resources ' : 'Product category'}
                options={pageIncome ? optionsTypeTrats : options}
                styles={isDesktopOrLaptop ? castomOptionsTablet : castomOptions}
                defaultValue={productCategory}
                onChange={setProductCategory}
              />

              <div className={s.numberBox}>
                <NumberFormat
                  className={s.inputSum}
                  name="sum"
                  allowLeadingZeros={true}
                  thousandSeparator={' '}
                  decimalScale={2}
                  placeholder={isDesktopOrLaptop ? '00.00 ' : '00.00 UAH'}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  onChange={handleInputChange}
                  value={sum}
                />
                <div className={s.image}>
                  <svg width={20} height={20}>
                    <use href={`${icon}#icon-calculator`} />
                  </svg>
                </div>
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

// : (provided, state) => ({
//   ...provided,

// }),

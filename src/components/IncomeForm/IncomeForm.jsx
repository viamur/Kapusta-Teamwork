import ProductCategoryFilter from 'components/ProductCategoryFilter/ProductCategoryFilter';
import icon from '../../images/icon.svg';
import s from './IncomeForm.module.scss';

const IncomeForm = () => {
  return (
    <div className={s.formBox}>
      <button type="button" className={s.btnBack}>
        <svg width={18} height={12}>
          <use href={`${icon}#icon-left_orange`} />
        </svg>
      </button>
      <form className={s.form}>
        <label>
          <input
            type="text"
            name="text"
            placeholder="Product description"
            className={s.input}
          />
        </label>
        <ProductCategoryFilter />
        <div className={s.numberBox}>
          <label>
            <input
              type="text"
              name="number"
              placeholder="00.00 UAH"
              className={s.inputNumber}
            />
          </label>
          <div className={s.image}>
            <svg width={20} height={20}>
              <use href={`${icon}#icon-calculator`} />
            </svg>
          </div>
        </div>
        <div className={s.btnBox}>
          <button type="input" className={s.btn}>
            input
          </button>
          <button type="input" className={s.btn}>
            clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default IncomeForm;

import ProductCategoryFilter from 'components/ProductCategoryFilter/ProductCategoryFilter';
import GooBack from 'components/GooBack/GooBack';
import icon from '../../images/icon.svg';
import s from './IncomeForm.module.scss';

const IncomeForm = () => {
  return (
    <div className={s.box}>
   <GooBack/>
        <div className={s.formBox}>
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
      </form>
    </div>
        <div className={s.btnBox}>
          <button type="input" className={s.btn}>
            input
          </button>
          <button type="input" className={s.btn}>
            clear
          </button>
        </div>
    </div>
  );
};
export default IncomeForm;

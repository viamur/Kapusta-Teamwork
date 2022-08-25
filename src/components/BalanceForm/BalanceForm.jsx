import s from './BalanceForm.module.scss';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';
import BalanceModal from 'components/BalanceModal/BalanceModal';

const BalanceForm = () => {
  const formik = useFormik({
    initialValues: {
      balance: '',
    },
    onSubmit: values => {
      console.log(values.balance);
    },
  });
  return (
    <div className={s.balance}>
      <p className={s.title}>Balance:</p>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <NumberFormat
          className={s.input}
          name="balance"
          suffix={' UAH'}
          allowLeadingZeros={true}
          thousandSeparator={' '}
          decimalScale={2}
          placeholder={'00.00 UAH'}
          fixedDecimalScale={true}
          allowNegative={false}
          onChange={formik.handleChange}
          value={formik.values.balance}
        />
        <button type="submit" className={s.submit} disabled={formik.values.balance.length === 0}>
          Confirm
        </button>
      </form>
      {/* временно сделал так */}
      {formik.values.balance.length === 1 && <BalanceModal />}
    </div>
  );
};

export default BalanceForm;

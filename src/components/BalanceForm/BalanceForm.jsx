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
          fixedDecimalScale={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          onChange={formik.handleChange}
          value={formik.values.balance}
        />
        <button type="submit" className={s.submit} disabled={formik.values.balance.length === 0}>
          Confirm
        </button>
      </form>
      {formik.values.balance.length === 0 && <BalanceModal />}
    </div>
  );
};

export default BalanceForm;

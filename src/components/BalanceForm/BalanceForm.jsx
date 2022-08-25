import s from './BalanceForm.module.scss';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';
import BalanceModal from 'components/BalanceModal/BalanceModal';
import { useSelector } from 'react-redux';
import { getAuthBalance } from 'redux/auth/AuthSelectors';
import { useEffect } from 'react';
import { useState } from 'react';

const BalanceForm = () => {
  const [balance, setBalance] = useState(0);

  const getBalance = useSelector(getAuthBalance);
  useEffect(() => {
    if (balance) return;
    setBalance(getBalance);
  }, [getBalance]);

  const handleChange = e => {
    /* ==========нужно обрезать значение с инпута и перевести в число!!!============= */
    setBalance(e.target.value);
  };

  const handleSubmit = e => {};

  return (
    <div className={s.balance}>
      <p className={s.title}>Balance:</p>
      <form onSubmit={handleSubmit} className={s.form}>
        <NumberFormat
          className={s.input}
          disabled={getBalance > 0}
          name="balance"
          suffix={' UAH'}
          allowLeadingZeros={true}
          thousandSeparator={' '}
          decimalScale={2}
          placeholder={'00.00 UAH'}
          fixedDecimalScale={true}
          allowNegative={false}
          onChange={handleChange}
          value={balance}
        />
        <button type="submit" className={s.submit} disabled={getBalance > 0}>
          Confirm
        </button>
      </form>
      {/* временно сделал так */}
      {balance === 0 && <BalanceModal />}
    </div>
  );
};

export default BalanceForm;

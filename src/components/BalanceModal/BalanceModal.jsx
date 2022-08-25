import s from './BalanceModal.module.scss';

const BalanceModal = () => {
    return (
      <div className={s.modal}>
        <div className={s.bcg}>
          <div className={s.polygon}></div>
          <p className={s.textA}>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={s.textB}>You can't spend money until you have it :)</p>
        </div>
      </div>
    );
};

export default BalanceModal;

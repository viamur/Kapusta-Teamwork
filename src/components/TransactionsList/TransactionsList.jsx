import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTransactionsIsLoading } from 'redux/transactions/transactionsSelector';
import icon from '../../images/icon.svg';
import s from './TransactionsList.module.scss';
import Modal from 'components/Modal/Modal';
import { removeTransactionThunk } from 'redux/transactions/transactionsOperations';
import category from '../../utils/categoryTranslate.json';

const TransactionsList = ({ data, mob }) => {
  const isLoading = useSelector(getTransactionsIsLoading);
  const [showModal, setShowModal] = useState(false);
  const [removeTransactionId, setRemoveTransactionId] = useState(null);
  const removeTransaction = () => {
    return removeTransactionThunk(removeTransactionId);
  };

  return (
    <>
      <ul className={s.list}>
        {isLoading ? (
          <li className={s.loader}>
            <Loader />
          </li>
        ) : (
          data.map((el, idx) => (
            <li key={el ? el['_id'] : idx} className={s.item}>
              {el && (
                <>
                  <div className={s.wrapA}>
                    {mob ? (
                      <>
                        <p className={s.desc}>{el.description}</p>
                        <div className={s.wrapB}>
                          <p className={s.date}>{el.date}</p>
                          <p className={s.category}>{category[el.category]}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={s.wrapB}>
                          <p className={s.date}>{el.date}</p>
                          <p className={s.desc}>{el.description}</p>
                        </div>
                        <p className={s.category}>{category[el.category]}</p>
                      </>
                    )}
                  </div>
                  <div className={s.wrapC}>
                    {el.expense ? (
                      <p className={s.amountExpense}>{`- ${el.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}.00 uah.`}</p>
                    ) : (
                      <p className={s.amountIncome}>{` ${el.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}.00 uah.`}</p>
                    )}

                    <button
                      type="button"
                      className={s.btn}
                      onClick={() => {
                        setShowModal(true);
                        setRemoveTransactionId(el['_id']);
                      }}
                    >
                      <svg width={18} height={18}>
                        <use href={`${icon}#icon-delete1`} />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
      {showModal && (
        <Modal
          ChildComponent
          title={'Are you sure?'}
          setShowModal={setShowModal}
          cb={removeTransaction}
        />
      )}
    </>
  );
};

export default TransactionsList;

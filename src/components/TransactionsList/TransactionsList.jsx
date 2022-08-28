import Loader from 'components/Loader/Loader';
import { useState, useCallback  } from 'react';
import { useSelector } from 'react-redux';
import { getTransactionsIsLoading } from 'redux/transactions/transactionsSelector';
import icon from '../../images/icon.svg';
import s from './TransactionsList.module.scss';
import Modal from 'components/Modal/Modal';

const TransactionsList = ({ data, mob }) => {
  const isLoading = useSelector(getTransactionsIsLoading);
  const [showModal, setShowModal] = useState(false);
  console.log()
  return (
    <ul className={s.list}>
      {isLoading ? (
        <div className={s.loader}>
          <Loader />
        </div>
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
                        <p className={s.category}>{el.category}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={s.wrapB}>
                        <p className={s.date}>{el.date}</p>
                        <p className={s.desc}>{el.description}</p>
                      </div>
                      <p className={s.category}>{el.category}</p>
                    </>
                  )}
                </div>
                <div className={s.wrapC}>
                  {el.expense ? (
                    <p className={s.amountExpense}>{`- ${el.amount}.00 uah.`}</p>
                  ) : (
                    <p className={s.amountIncome}>{` ${el.amount}.00 uah.`}</p>
                  )}
                  <button type="button" className={s.btn}>
                    <svg width={18} height={18}>
                      <use href={`${icon}#icon-delete1`} />
                    </svg>
                  </button>
                     {showModal && (
        <Modal
          ChildComponent
          title={"Are you sure?"}
          setShowModal={setShowModal}
          cb={`${icon}#icon-delete1`}
        />
      )}
                </div>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default TransactionsList;

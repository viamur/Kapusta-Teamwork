import React from 'react';
import styles from './Modal.module.css';
import { ReactComponent as CloseIcon } from "../../images/icon.svg#icon-close";
import '../../index.scss';

const Modal = () => {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modalBox}>
        <span className={styles.info}>Are you sure?</span>
        <button
          type="button"
          className={[styles.button, styles.confirmBtn].join(' ')}
          CloseIcon width="12" height="12"
        >
          YES
        </button>
        <button
          type="button"
          className={[styles.button, styles.refuteBtn].join(' ')}
        >
          NO
        </button>
      </div>
    </>
  );
};

export default Modal;

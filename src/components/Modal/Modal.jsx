import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import icon from '../../images/icon.svg';
import s from "../Modal/Modal.module.scss";

export default function Modal({ title, setShowModal, cb }) {
  const dispatch = useDispatch();
  const portalModal = document.querySelector('#modalRoot')
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal]);

  const handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  const handleButtonClickNo = () => {
    setShowModal(false);
  };

  const handleButtonClickYes = () => {
    dispatch(cb());
    setShowModal(false);
  };

  return createPortal (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.modalClose} onClick={handleButtonClickNo}>
          <svg width={12} height={12} 
          >
           <use href={`${icon}#icon-close`}/>
          </svg>  
        </button>
        <h2 className={s.modalTitle}>{title}</h2>
        <div>
          <button className={s['btn-accent']} onClick={handleButtonClickYes}>Yes</button>
          <button className={s.btn} onClick={handleButtonClickNo}>No</button>
        </div>
      </div>
    </div>,
    portalModal
  );
}

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Modal.module.scss';
import icon from '../../images/icon.svg';
import '../../index.scss';

// const modalRoot = document.getElementById('modalRoot');

  // const modalEscape = e => {
  //   if (e.code === 'Escape') {
  //     toggleModal();
  //   }
  // };

const modalRoot = document.getElementById('modalRoot');

const Modal = ({ onSubmit, onClose, title }) => {
  const handleClickYes = () => {
    onSubmit();
    onClose();
  } 

  const handleClickNo = () => {
    onClose();
  }

  return createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modalBox}>
        <span className={styles.info}>{title}</span>
         <button className={styles.closeBtn} onClick={handleClickNo}>
          <svg width={12} height={12}
          >
            <use href={`${icon}#icon-close`}/>
          </svg>
        </button>
        <button
          type="button"
          className={[styles.button, styles.yesBtn].join(' ')}
          onClick={handleClickYes}
        >
          YES
        </button>
        <button
          type="button"
          className={[styles.button, styles.noBtn].join(' ')}
          onClick={handleClickNo}
        >
          NO
        </button>
      </div>
    </>,
    modalRoot
    );
  };
  
  export default Modal;
  
// const Modal = ({ toggleModal, children }) => {
//   const portalModal = document.querySelector('#АЙДИ ПОРТАЛА!!!'); 

//   const modalEscape = e => {
//     if (e.code === 'Escape') {
//       toggleModal();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', modalEscape);

//     return () => {
//       window.removeEventListener('keydown', modalEscape);
//     };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  // const clickBackdrop = (event) => {
  //   if (event.currentTarget === event.target) {
  //     toggleModal();
  //   }
  // };


// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import React from 'react';
// import styles from './Modal.module.scss';
// import icon from '../../images/icon.svg';
// import '../../index.scss';

// import PropTypes from 'prop-types';

// export default function Modal({ title, onClose, onClick }) {
//   useEffect(() => {
//     const handleKeyDown = (evt) => {
//       if (evt.code === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = (evt) => {
//     if (evt.target === evt.currentTarget) {
//       onClose();
//     }
//   };

//   const handleButtonClickNo = () => {
//     onClose();
//   };

//   const handleButtonClickYes = () => {
//     onClick();
//     onClose();
//   };

//   return (
//     <div className={s.Overlay} onClick={handleBackdropClick}>
//       <div className={s.modal}>
//         <button className={s.modalClose} onClick={handleButtonClickNo}>
//           <svg width={12} height={12}
//           >
//             <use href={`${icon}#icon-close`}/>
//           </svg>
//         </button>
//         <h2 className={s.modalTitle}>{title}</h2>
//         <div>
//           <button className='btn btn-accent' onClick={handleButtonClickYes}>Yes</button>
//           <button className='btn' onClick={handleButtonClickNo}>No</button>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

// const modalRoot = document.getElementById('modalRoot');
// // const [forModal, setForModal] = useState({});

// const Modal = ({ toggleModale, forModal }) => {
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         toggleModale();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, []);

//   const handleCloseBackdrop = e => {
//     if (e.target.nodeName !== 'DIV') return;
//     toggleModale();
//   };

//   return createPortal(
//     <div className="overlay" onClick={handleCloseBackdrop}>
//       <div className="modal">
//         <img src={forModal.src} alt={forModal.alt} />
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// export default Modal;

// Modal.propTypes = {
//   toggleModale: PropTypes.func.isRequired,
//   forModal: PropTypes.object.isRequired,
// };

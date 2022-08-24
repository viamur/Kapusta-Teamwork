import icon from '../../images/icon.svg';
import s from './Pagination.module.scss';

const month = 'NOVEMBER 2019';
const Pagination = () => {
  return (
    <div className={s.pagContainer}>
      <p className={s.paragraph}>Current period:</p>
      <div className={s.btnContainer}>
        <button type="button" className={s.btnLeft}><svg width={10} height={10}>
        <use href={`${icon}#icon-vector_leftorange`} />
        </svg>
        </button>
        <h2 className={s.month}>{month}</h2>
        <button type="button" className={s.btnRigth}><svg width={10} height={10}>
        <use href={`${icon}#icon-vector_rightorange`} />
        </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

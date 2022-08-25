import icon from '../../images/icon.svg';
import s from './CategoryList.module.scss';

export default function CategoryList() {
  return (
    <div className={s.backgroundCategoryList}>
      <div className={s.expenses}>
        <button className={s.titleBtn}>
          <svg className={s.iconsExpenses} width={4} height={10}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </button>

        <h2 className={s.title}>Expenses</h2>

        <button className={s.titleBtn}>
          <svg className={s.iconsExpenses} width={4} height={10}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </button>
      </div>

      <ul className={s.categoryList}>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>5000.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-eda61`} />
          </svg>
          <p className={s.discriptionItem}>Products</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>200.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-cocktail1`} />
          </svg>
          <p className={s.discriptionItem}>Alcohol</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>800.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-airletter1`} />
          </svg>
          <p className={s.discriptionItem}>Entertainment</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>900.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-hands_heart1`} />
          </svg>
          <p className={s.discriptionItem}>Health</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>2 000.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-car1`} />
          </svg>
          <p className={s.discriptionItem}>Transport</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>1 500.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-sofa1`} />
          </svg>
          <p className={s.discriptionItem}>Housing</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>800.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-tools1`} />
          </svg>
          <p className={s.discriptionItem}>Technique</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>2 200.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-invoice1`} />
          </svg>
          <p className={s.discriptionItem}>Communal, communication</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>1 800.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-kuvshin1`} />
          </svg>
          <p className={s.discriptionItem}>Sports, hobbies</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>2 400.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-book1`} />
          </svg>
          <p className={s.discriptionItem}>Education</p>
        </li>
        <li className={s.categoryListItem}>
          {/* <a className={s.categoryListItemLink} href=""></a> */}
          <p className={s.priceItem}>3 000.00</p>
          <svg width={56} height={56}>
            <use href={`${icon}#icon-ufo1`} />
          </svg>
          <p className={s.discriptionItem}>Other</p>
        </li>
      </ul>
    </div>
  );
}

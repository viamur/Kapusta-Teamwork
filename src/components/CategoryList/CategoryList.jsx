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

      <div className={s.categoryListContainer}>
        <ul className={s.categoryList}>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>5000.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIcon}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-eda61`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Products</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>200.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconAlcohol}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-cocktail1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Alcohol</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>800.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconEntertainment}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-airletter1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Entertainment</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>900.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconHealth}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-hands_heart1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Health</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 000.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconTransport}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-car1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Transport</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>1 500.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconHousing}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-sofa1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Housing</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>800.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconTechnique}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-tools1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Technique</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 200.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconCommunalAndCommunication}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-invoice1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>
              Communal, <br /> communication
            </p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>1 800.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconSportsAndHobbies}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-kuvshin1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>
              Sports, <br /> hobbies
            </p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 400.00</p>
            <div className={s.borderForIconRelative}>
              <div className={s.borderForIconEducation}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-book1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Education</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>3 000.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconOther} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-ufo1`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Other</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

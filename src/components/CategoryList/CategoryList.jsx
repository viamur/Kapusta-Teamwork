import icon from '../../images/icon.svg';
import s from './CategoryList.module.scss';

export default function CategoryList() {
  return (
    <div className={s.backgroundCategoryList}>
      <div className={s.categoryListContainer}>
        <ul className={s.categoryList}>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>5000.00</p>
            <div className={s.borderForIconRelative}>
              <div className={`${s.borderForIcon} ${s.borderForHover}`}></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-products`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Products</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>200.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconAlcohol} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-alcohol`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Alcohol</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>800.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconEntertainment} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-entertainment`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Entertainment</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>900.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconHealth} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-health`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Health</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 000.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconTransport} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-transport`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Transport</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>1 500.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconHousing} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-housing`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Housing</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>800.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconTechnique} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-technique`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Technique</p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 200.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconCommunalAndCommunication} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-communal`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>
              Communal, <br /> communication
            </p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>1 800.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconSportsAndHobbies} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-sports`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>
              Sports, <br /> hobbies
            </p>
          </li>
          <li className={s.categoryListItem}>
            <p className={s.priceItem}>2 400.00</p>
            <div className={s.borderForIconRelative}>
              <div
                className={`${s.borderForIconEducation} ${s.borderForHover}`}
              ></div>
              <svg className={s.iconFill} width={56} height={56}>
                <use href={`${icon}#icon-education`} />
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
                <use href={`${icon}#icon-other`} />
              </svg>
            </div>
            <p className={s.discriptionItem}>Other</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

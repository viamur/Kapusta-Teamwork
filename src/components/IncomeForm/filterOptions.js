export const options = [
  { id: 'Продукты', label: 'Products' },
  { id: 'Алкоголь', label: 'Alcohol' },
  { id: 'Развлечения', label: 'Entertainment' },
  { id: 'Здоровье', label: 'Health' },
  { id: 'Транспорт', label: 'Transport' },
  { id: 'Всё для дома', label: 'Housing' },
  { id: 'Техника', label: 'Technique' },
  { id: 'Коммуналка и связь', label: 'Communal, communications' },
  { id: 'Спорт и хобби', label: 'Sports, hobbies' },
  { id: 'Образование', label: 'Education' },
  { id: 'Прочее', label: 'Other' },
];

export const optionsTypeTrats = [
  { id: 'З/П', label: 'Salary' },
  { id: 'Доп. доход', label: 'Additional income' },
];

export const castomOptions = {
  option: (provided, state) => ({
    ...provided,
    color: 'red',
    cursor: 'pointer',
    backgroundColor: ' #fffff',
    color: state.isSelected ? '#52555F' : '#C7CCDC',
  }),

  container: (provided, state) => ({
    ...provided,
    width: '280px',
    height: '44px',
    padding: '0px',
    borderRadius: '0px 0px 25px 0px',
    backgroundColor: 'transparent',
    border: '2px solid #ffffff',
  }),

  placeholder: (provided, state) => ({
    ...provided,

    fontWeight: '400',
    fontSize: '12px ',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    color: '#c7ccdc',
  }),

  input: (provided, state) => ({
    ...provided,
    fontWeight: '400',
    fontSize: '12px ',
    lineHeight: '14px',
    color: ' #52555f',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#ff751d',
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0px 20px',
  }),

  control: () => ({
    cursor: 'pointer',
    display: 'flex',
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

export const castomOptionsTablet = {
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: ' #fffff',
    color: state.isSelected ? '#52555F' : '#C7CCDC',
  }),

  container: (provided, state) => ({
    ...provided,
    width: '185px',
    height: '44px',
    padding: '0px',
    backgroundColor: 'transparent',
    border: '2px solid #f5f6fb',
  }),

  placeholder: (provided, state) => ({
    ...provided,

    fontWeight: '400',
    fontSize: '12px ',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    color: '#c7ccdc',
  }),

  input: (provided, state) => ({
    ...provided,
    fontWeight: '400',
    fontSize: '12px ',
    lineHeight: '14px',
    color: ' #52555f',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#ff751d',
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0px 0px 0px 20px',
  }),

  control: () => ({
    cursor: 'pointer',
    display: 'flex',
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

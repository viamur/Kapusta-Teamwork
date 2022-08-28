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
    cursor: 'pointer',
    border: '1px solid ',
    width: '100%',
    backgroundColor: ' #F5F6FB',
    color: state.isSelected ? '#52555F' : '#C7CCDC',
    padding: 20,
  }),
  control: () => ({
    cursor: 'pointer',
    display: 'flex',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

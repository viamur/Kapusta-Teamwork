import React, { useState } from 'react';
import Select from 'react-select';
import s from './ProductCategoryFilter.module.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
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
    //    none of react-select's styles are passed to <Control />
    
    cursor: 'pointer',
    display: 'flex',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const ProductCategoryFilter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={s.filterBox}>
      <Select
        className={s.selected}
        placeholder="Product"
        options={options}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default ProductCategoryFilter;

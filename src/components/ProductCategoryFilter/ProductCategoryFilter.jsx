import React, { useState } from 'react';
import Select from 'react-select';
import s from './ProductCategoryFilter.module.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

 const ProductCategoryFilter=()=> {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div >
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className={s.filterBox}
      />
    </div>
  );
}

export default ProductCategoryFilter
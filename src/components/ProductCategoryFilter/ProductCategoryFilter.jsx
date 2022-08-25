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
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
    //    none of react-select's styles are passed to <Control />
  
      cursor: 'pointer',
      display: 'flex',
      padding:'2px 20px',
      borderRadius: '0px 0px 25px 0px', 
      border:'2px solid #FFFFFF',
    }),
    singleValue: (provided, state) => {
        console.log(provided);
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

 const ProductCategoryFilter=()=> {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={s.filterBox} >
      <Select
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
       
      />
    </div>
  );
}

export default ProductCategoryFilter
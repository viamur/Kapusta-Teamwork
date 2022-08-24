import React from 'react';
import icon from '../../images/icon.svg';

const Calendar = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${icon}#icon-calendar`} />
    </svg>
  );
};
export default Calendar;

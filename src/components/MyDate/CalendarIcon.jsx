import React from 'react';
import icon from '../../images/icon.svg';

const CalendarIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${icon}#icon-calendar`} />
    </svg>
  );
};
export default CalendarIcon;

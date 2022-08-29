import React from 'react';

import DatePicker from 'react-date-picker';
import { useState } from 'react';

import './MyDate.scss';
import CalendarIcon from './CalendarIcon';

export default function MyDate() {
  return (
    <div>
      
        <DatePicker
          className="my-date-picker"
          onChange={''}
          value={''}
          clearIcon=""
          format="dd.MM.yyyy"
          calendarIcon={<CalendarIcon />}
          />
        
      
    </div>
  );
}

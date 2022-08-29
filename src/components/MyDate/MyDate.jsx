import React from 'react';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import './MyDate.scss';
import CalendarIcon from './CalendarIcon';
import { useDispatch } from 'react-redux';
import { updadeDate } from 'redux/transactions/transactionsSlice';
import moment from 'moment';

export default function MyDate() {
  const [value, onChange] = useState(new Date());

  const dispatch = useDispatch();

  const handleChange = e => {
    onChange(e);
    dispatch(updadeDate(moment(e).format('YYYY-MM-DD')));
  };

  return (
    <div>
      <DatePicker
        className="my-date-picker"
        onChange={handleChange}
        value={value}
        clearIcon=""
        format="dd.MM.yyyy"
        calendarIcon={<CalendarIcon />}
      />
    </div>
  );
}

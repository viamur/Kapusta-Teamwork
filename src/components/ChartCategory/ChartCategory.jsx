import s from './ChartCategory.module.scss';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const labels = ['August 2022'];

// "monthStats": {
//     "Январь" : "January",
//     "Февраль" : "February",
//     "Март" : "March",
//     "Апрель" : "April",
//     "Май" : "May",
//     "Июнь" : "June",
//     "Июль" : "July",
//     "Август" : "August",
//     "Сентябрь" : "September",
//     "Октябрь" : "October",
//     "Ноябрь" : "November",
//     "Декабрь" : "December"
//   }

export const data = {
  labels,
  datasets: [
    {
      label: 'Products',
      data: labels.map(() => 5000),
      backgroundColor: '#FF751D',
      borderRadius: 10,
    },
    {
      label: 'Alcohol',
      data: labels.map(() => 4500),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Entertainment',
      data: labels.map(() => 3200),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Healthy',
      data: labels.map(() => 2100),
      backgroundColor: '#FF751D',
      borderRadius: 10,
    },
    {
      label: 'Transport',
      data: labels.map(() => 1800),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Housing',
      data: labels.map(() => 1700),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Technique',
      data: labels.map(() => 1500),
      backgroundColor: '#FF751D',
      borderRadius: 10,
    },
    {
      label: 'Communal, communications',
      data: labels.map(() => 800),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Sports, hobbies',
      data: labels.map(() => 500),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
    {
      label: 'Education',
      data: labels.map(() => 300),
      backgroundColor: '#FF751D',
      borderRadius: 10,
    },
    {
      label: 'Other',
      data: labels.map(() => 300),
      backgroundColor: '#FFDAC0',
      borderRadius: 10,
    },
  ],
};

export default function ChartCategory() {
  return (
    <div className={s.backgroundChartCategory}>
      <Bar className={s.canvas} options={options} data={data} />
    </div>
  );
}

// [
//   'Продукты' : 'Products',
//   'Алкоголь' : 'Alcohol',
//   'Развлечения' : 'Entertainment',
//   'Здоровье' : 'Health',
//   'Транспорт' : 'Transport',
//   'Всё для дома' : 'Housing',
//   'Техника' : 'Technique',
//   'Коммуналка и связь' : 'Communal, communications',
//   'Спорт и хобби' : 'Sports, hobbies',
//   'Образование' : 'Education',
//   'Прочее' : 'Other',
// ];

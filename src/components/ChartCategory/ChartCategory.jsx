import s from './ChartCategory.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'x',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  minBarThickness: 15,
  maxBarThickness: 20,

  scales: {
    x: {
      display: true,
      grid: {
        color: 'transparent',
        borderColor: 'transparent',
        tickColor: 'transparent',
      },
    },
    y: {
      grid: {
        color: '#F5F6FB',
        borderColor: 'transparent',
        tickColor: 'transparent',
        lineWidth: 2,
      },
    },
  },
};

const labels = ['Transport'];

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
      label: '',
      data: labels.map(() => 5000),
      backgroundColor: ['#FF751D'],
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

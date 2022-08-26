import s from './ChartCategoryMobile.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  // elements: {
  //   bar: {
  //     borderWidth: 1,
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const labels = ['August 2022'];

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
    // {
    //   label: 'Technique',
    //   data: labels.map(() => 1500),
    //   backgroundColor: '#FF751D',
    //   borderRadius: 10,
    // },
    // {
    //   label: 'Communal, communications',
    //   data: labels.map(() => 800),
    //   backgroundColor: '#FFDAC0',
    //   borderRadius: 10,
    // },
    // {
    //   label: 'Sports, hobbies',
    //   data: labels.map(() => 500),
    //   backgroundColor: '#FFDAC0',
    //   borderRadius: 10,
    // },
    // {
    //   label: 'Education',
    //   data: labels.map(() => 300),
    //   backgroundColor: '#FF751D',
    //   borderRadius: 10,
    // },
    // {
    //   label: 'Other',
    //   data: labels.map(() => 300),
    //   backgroundColor: '#FFDAC0',
    //   borderRadius: 10,
    // },
  ],
};

export default function ChartCategoryMobile() {
  return (
    <div className={s.backgroundChartCategory}>
      <Bar options={options} data={data} />
    </div>
  );
}

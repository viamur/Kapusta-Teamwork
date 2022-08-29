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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, ChartDataLabels, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'x',
  responsive: true,
  layout: {
    /* Паддинг что б упустить чуть графики что б влезло сверху лейбел */
    padding: {
      top: 30,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    /* Стилизация лейбла позиция и тд */
    datalabels: {
      color: '#52555F',
      anchor: 'end',
      align: 'end',
      offset: 5,
      font: {
        size: '12',
      },
      /* Формат лейбла*/
      formatter: value => `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH`,
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
      ticks: {
        /* Убираем шкалу с лева */
        display: false,
      },
      grid: {
        color: '#F5F6FB',
        borderColor: 'transparent',
        tickColor: 'transparent',
      },
    },
  },
};

const labels = ['Transport', 'bike', 'Transport', 'bike', 'Transport', 'bike'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [10000, 3000, 5000, 1000, 8000, 3000],
      backgroundColor: ['#FF751D'],
      borderRadius: 10,
      /* Ширина баров */
      maxBarThickness: 38,
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

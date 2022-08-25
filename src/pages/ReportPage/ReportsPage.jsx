import React from 'react';
import ChartCategory from '../../components/ChartCategory/ChartCategory';
import s from './ReportPage.module.scss';
const ReportsPage = () => {
  return (
    <>
      <h2 className={s.title}>ReportsPage</h2>
      <div>
        <ChartCategory />
      </div>
    </>
  );
};
export default ReportsPage;

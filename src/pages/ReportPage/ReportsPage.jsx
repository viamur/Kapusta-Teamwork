import React from 'react';
import ChartCategory from '../../components/ChartCategory/ChartCategory';
import CategoryList from '../../components/CategoryList/CategoryList';
import s from './ReportPage.module.scss';
const ReportsPage = () => {
  return (
    <>
      <h2 className={s.title}>ReportsPage</h2>
      <div>
        <CategoryList />
      </div>
      <div>
        <ChartCategory />
      </div>
    </>
  );
};
export default ReportsPage;

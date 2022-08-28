import Balance from 'components/Balance/Balance';
import Reports from 'components/Reports/Reports';
import CategoryList from '../../components/CategoryList/CategoryList';
import ChartCategory from '../../components/ChartCategory/ChartCategory';
// import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
// import IncomeForm from 'components/IncomeForm/IncomeForm';

const ReportsPage = () => {
  return (
    <>
      {/* <IncomeForm/> */}
      <Balance />
      <Reports />
      <CategoryList />
      <ChartCategory />
      {/* <ChartCategoryMobile /> */}
    </>
  );
};
export default ReportsPage;

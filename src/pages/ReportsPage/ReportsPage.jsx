import Balance from 'components/Balance/Balance';
import Reports from 'components/Reports/Reports';
// import IncomeForm from 'components/IncomeForm/IncomeForm';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import ChartCategory from '../../components/ChartCategory/ChartCategory';
// import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
// import { useMediaQuery } from 'react-responsive';

const ReportsPage = () => {
  // const isMobile = useMediaQuery({
  //   query: '(min-width: 767px)',
  // });
  return (
    <>
      <Balance />
      <Reports />
      {/* <CategoryList /> */}
      {/* {isMobile ? <ChartCategory /> : <ChartCategoryMobile />} */}
    </>
  );
};
export default ReportsPage;

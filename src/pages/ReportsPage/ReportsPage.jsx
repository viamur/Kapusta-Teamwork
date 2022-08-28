import Balance from 'components/Balance/Balance';
import Reports from 'components/Reports/Reports';
import IncomeForm from 'components/IncomeForm/IncomeForm';
// import CategoryList from '../../components/CategoryList/CategoryList';

const ReportsPage = () => {
  return (
    <>
       <IncomeForm/>
      <Balance />
      <Reports />
      {/* <CategoryList /> */}
    </>
  );
};
export default ReportsPage;

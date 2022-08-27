const incomesMonthSelector = ({ reports }) => reports.incomes.incomesData;
const expensesMonthSelector = ({ reports }) => reports.expenses.expensesData;

const totalIncomesMonthSelector = ({ reports }) => reports.incomes.incomeTotal;
const totalExpensesMonthSelector = ({ reports }) =>
  reports.expenses.expenseTotal;

const isLoadingSelector = ({ reports }) => reports.isLoading;
const errorSelector = ({ reports }) => reports.error;

export {
  //?Вибір доходів за місяця,
  incomesMonthSelector,

  //?витрати за місяця,
  expensesMonthSelector,

  //?Загальні надходження за місяця
  totalIncomesMonthSelector,

  //?загальні витрати за місяця,
  totalExpensesMonthSelector,

  //?завантаження
  isLoadingSelector,

  //?помилка
  errorSelector,
};

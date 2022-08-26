const incomesMonthSelector = ({ reports }) => reports.data.incomes.incomesData;
const expensesMonthSelector = ({ reports }) =>reports.data.expenses.expensesData;

const totalIncomesMonthSelector = ({ reports }) => reports.data.incomes.incomeTotal;
const totalExpensesMonthSelector = ({ reports }) => reports.data.expenses.expenseTotal;

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

import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* auth */
const googleAuth = async () => await axios.get('auth/google');
const register = async credentials =>
  await axios.post('auth/register', credentials);

const login = async credentials => await axios.post('auth/login', credentials);
const refresh = async credentials =>
  await axios.post('auth/refresh', credentials);

const logout = async () => await axios.post('auth/logout');

/* transaction */
const addIncome = async credentials =>
  await axios.post('transaction/income', credentials);
const getIncome = async () => await axios.get('transaction/income');
const addExpense = async credentials =>
  await axios.post('transaction/expense', credentials);
const getExpense = async () => await axios.get('transaction/expense');
const removeTransaction = async id => await axios.delete(`transaction/${id}`);
const getIncomeCategories = async credentials =>
  await axios.get('transaction/income-categories');
const getExpenseCategories = async credentials =>
  await axios.get('transaction/expense-categories');
 const getPeriodTransactions = async date =>
   await axios.get(`transaction/period-data?date=${date}`);

const getTransactionReportApi = async () => {
  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA2NDYzMGRiN2E4MTA4MTQwMzBiMzAiLCJzaWQiOiI2MzA4YjIyY2RiN2E4MTA4MTQwMzBlNmYiLCJpYXQiOjE2NjE1MTQyODQsImV4cCI6MTY2MTUxNzg4NH0.Pk2pDiU5KWilXXn349lLfQC2cAeb_7DhU31wTPJUlpM';
  return axios
    .get('/transaction/period-data', {
      params: {
        date: '2022-07',
      },
    })
    .then(response => {
      // console.log(response.data);
      return response.data;
    });
};

/* user */
const updateBalance = async credentials =>
  await axios.patch('user/balance', credentials);
const getUser = async () => await axios.get('user');

export {
  token,
  /* auth */
  register,
  login,
  logout,
  refresh,
  googleAuth,
  /* transaction */
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  removeTransaction,
  getIncomeCategories,
  getExpenseCategories,
   getPeriodTransactions,
  getTransactionReportApi,
  /* user */
  updateBalance,
  getUser,
};

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
const addTransactionIncomeApi = async credentials =>
  await axios.post('transaction/income', credentials);
// const getTransactionIncomeApi = async () =>
//   await axios.get('transaction/income');
const getTransactionIncomeApi = () => {
  return axios.get('/transaction/income').then(response => response.data);
};

const addTransactionExpenseApi = async credentials =>
  await axios.post('transaction/expense', credentials);
// const getTransactionExpenseApi = async () =>
//   await axios.get('transaction/expense');
const getTransactionExpenseApi = () => {
  return axios.get('/transaction/expense').then(response => response.data);
};

const removeTransactionApi = async id =>
  await axios.delete(`transaction/${id}`);

const getIncomeCategories = async credentials =>
  await axios.get('transaction/income-categories');
const getExpenseCategories = async credentials =>
  await axios.get('transaction/expense-categories');

const getPeriodTransactions = async date =>
  await axios.get(`transaction/period-data?date=${date}`);

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
  addTransactionIncomeApi,
  getTransactionIncomeApi,
  addTransactionExpenseApi,
  getTransactionExpenseApi,
  removeTransactionApi,
  getIncomeCategories,
  getExpenseCategories,
  getPeriodTransactions,
  /* user */
  updateBalance,
  getUser,
};

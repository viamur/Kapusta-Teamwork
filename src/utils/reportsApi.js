export const getTransactionReportApi = () => {
  return axios
    .get('/transaction/period-data', {
      params: {
        date: '2022-07',
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};

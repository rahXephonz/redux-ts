import moment from 'moment';

export const getDate = (date: string | undefined) => {
  const actualDate = moment(date).format('MMM, YYYY');

  return actualDate;
};

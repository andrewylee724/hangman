import _ from 'lodash';

export const convertStringToArray = (str) => {
  return str.split('\n');
};

export const getRandomWord = (arr) => {
  return _.sample(arr);
};

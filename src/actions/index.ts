export const INCREMENT = 'INCREMENT';

export const increment = (num: number = 1) => {
  return {
    type: INCREMENT,
    num
  }
};
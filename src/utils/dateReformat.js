const convertDateFromMilliseconds = (milliseconds) => {
  const date = new Date(milliseconds);
  return date.toDateString();
};

export default convertDateFromMilliseconds;

// Function which filter by entered name
export default (value, arrayToSort, sortByName) => {
  const result = arrayToSort.filter((el) => {
    const compereValue = el[sortByName].slice(0, value.length);

    if (compereValue.toLowerCase() === value.toLowerCase()) return true;
  });
  return result;
};

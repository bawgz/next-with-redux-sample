export default object =>
  Object.keys(object).map((key, i) => (i === 0 ? key : `, ${key}`));

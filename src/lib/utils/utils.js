export const converArrayIntoObjectWithPrefix = (arr, prefix) => {
  const result = {}

  arr.forEach((item) => {
    result[item] = `${prefix}${item}`;
  })
  return result;
}
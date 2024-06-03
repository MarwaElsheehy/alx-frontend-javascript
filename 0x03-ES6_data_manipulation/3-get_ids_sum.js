export default function getStudentIdsSum(arr) {
  return arr.reduce((counter, currentObj) => counter + currentObj, 0);
}

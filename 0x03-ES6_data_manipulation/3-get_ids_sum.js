export default function getStudentIdsSum(arr) {
  return arr.reduce((counter, currentObj) => counter.id + currentObj.id, 0);
}

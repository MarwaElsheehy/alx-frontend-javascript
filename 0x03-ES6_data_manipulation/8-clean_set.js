export default function cleanSet(set, startString) {
  let txt = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const elet of set) {
      if (ele && ele.startsWith(startString)) {
        array.push(ele.slice(startString.length));
      }
    }
    txt = array.join('-');
  }
  return txt;
}

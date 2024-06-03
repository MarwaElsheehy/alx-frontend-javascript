export default function cleanSet(set, startString) {
  let txt = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const elet of set) {
      if (ele && ele.startsWith(startString)) {
        arr.push(ele.slice(startString.length));
      }
    }
    txt = arr.join('-');
  }
  return txt;
}


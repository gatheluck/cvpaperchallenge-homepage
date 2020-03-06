

function compareByDate(a, b) { 
  if (a.hasOwnProperty('date')) {
    return new Date(b.date) - new Date(a.date);
  } else {
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  }
};

function makePair(prev, curr) {
  if (prev.length == 0) {
    return [[curr]];
  } else {
    if (prev.slice(-1)[0].length == 1) {
      return [
        ...prev.slice(0, prev.length - 1),
        [...prev.slice(-1)[0], curr]
      ];
    } else {
      return [...prev, [curr]];
    }
  }
} 

// injected functions are avaiable from all components.
// please refere: https://qiita.com/itouuuuuuuuu/items/bcad408842c7723e7ca3 
export default ({}, inject) => {
  inject('compareByDate', compareByDate);
  inject('makePair', makePair);
};
// const seqNth = (3*(2**(n-1)) - 2);

// const geoSeqNth = 3*(2**(n -1));

// console.log((3*(2**(1000 - 1)) - 2));

// console.log(3*(2**(1000 -1)));

function strangeCounter(t) {
  let c = 1;
  let d = 0;
  
  const sequenceArray = [];
  
  if (t < 9) {
    while (d < t) {
    d = (3*(2**(c - 1)) - 2);
    c += 1;
    sequenceArray.push(d);
  }
  
  const lastSequenceColumn = sequenceArray.pop();
  
  const value = lastSequenceColumn + 2;
  
  const gap = t - lastSequenceColumn;
  
  const nth = value - gap;
  
  return nth;
  }
  
  while (d < t) {
    d = (3*(2**(c - 1)) - 2);
    c += 1;
    sequenceArray.push(d);
  }
  sequenceArray.pop();
  
  const lastSequenceColumn = sequenceArray.pop();
  
  const value = lastSequenceColumn + 2;
  
  const gap = t - lastSequenceColumn;
  
  const nth = value - gap;
  
  return nth;
  
  }

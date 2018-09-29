const abc = {
  A: 'Alfa',
  B: 'Bravo',
  C: 'Charlie',
  D: 'Delta',
  E: 'Echo',
  F: 'Foxtrot',
  G: 'Golf',
  H: 'Hotel',
  I: 'India',
  J: 'Juliett',
  K: 'Kilo',
  L: 'Lima',
  M: 'Mike',
  N: 'November',
  O: 'Oscar',
  P: 'Papa',
  Q: 'Quebec',
  R: 'Romeo',
  S: 'Sierra',
  T: 'Tango',
  U: 'Uniform',
  V: 'Victor',
  W: 'Whiskey',
  X: 'X-ray',
  Y: 'Yankee',
  Z: 'Zulu',
};

function aaia(input) {
  const char = input.toUpperCase().trim().split('');
  const output = [];
  for (let index = 0; index < char.length; index += 1) {
    const element = char[index];
    if (abc[element]) {
      output.push(abc[element]);
    } else if (element === ' ') {
      output.push(null);
    } else {
      output.push(element);
    }
  }
  return output;
}

export default aaia;

// console.log(aaia('was geht 23'));

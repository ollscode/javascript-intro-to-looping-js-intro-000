
function forLoop(array) {
  for (var i = 1; i < 26; i++) {
    if (i == 0) {
      array[i] = 'I am 1 strange loop';
    } else {
      array[i] = `I am ${i} strange loops.`;
    }
  }

  return array;
}

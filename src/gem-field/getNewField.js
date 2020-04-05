function getNewField(size) {
  let numbers = [].fill('');
  numbers[size * size - 1] = '';
  numbers.fill('');
  numbers = numbers.map((el, ind) => ind);

  function shuffle(array, repeat) {
    for (let i = 0; i <= repeat; i += 1) {
      array.sort(() => Math.random() - 0.5);
    }
  }
  shuffle(numbers, size * size);

  const field = [];
  for (let i = 0; i < size; i += 1) {
    field[i] = [];
    for (let j = 0; j < size; j += 1) {
      field[i][j] = numbers.pop();
    }
  }
  return field;
}

export default getNewField;

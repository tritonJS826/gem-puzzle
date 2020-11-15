function getSolvingField(size = 4) {
  let numbers = [].fill('');
  numbers[size ** 2 - 1] = '';
  numbers.fill('');
  numbers = numbers.map((el, ind) => ind);

  const field = [];
  for (let i = 0; i < size; i += 1) {
    field[i] = [];
    for (let j = 0; j < size; j += 1) {
      field[i][j] = numbers.pop();
    }
  }

  for (let i = 0; i < size; i += 1) {
    field[i].reverse();
  }
  return field.reverse();
}

export default getSolvingField;

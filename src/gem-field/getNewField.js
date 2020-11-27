import getSolvingField from './getSolvingField';
import shuffleArr from '../helpers/shuffleArr';

const getNewField = (size) => {
  const solvingField = getSolvingField(size);

  shuffleArr(solvingField, size);

  const newField = solvingField.map((line) => {
    shuffleArr(line, size);
    return line;
  });

  return newField;
};

export default getNewField;

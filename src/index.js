import 'normalize.css';
import './style.css';
import getNewField from './gem-field/getNewField';
import renderMainBlocks from './gem-field/renderMainBlocks';
import renderField from './gem-field/renderField';
import timeRenderer from './statisticks/timeRenderer';
// import tryToShift from './gem-field/tryToShift';

const gemPuzzle = {
  field: [],
  fieldSize: 4,
  moveCounter: 0,
  startDate: 0,

  //  return new field (matrix)
  getNewField(size = this.fieldSize) {
    return getNewField(size);
  },

  saveStartDate() {
    this.startDate = new Date();
  },

  counterPlusOne() {
    this.moveCounter += 1;
  },

  timeRenderer(startDate = this.startDate) {
    timeRenderer(startDate);
  },

  moveCounterRenderer(moveCounter = this.moveCounter) {
    document.getElementById('moveCounter').innerText = `Ходов: ${moveCounter}`;
  },

  renderMainBlocks() {
    renderMainBlocks();
  },

  renderField(field = this.field) {
    renderField(field);
  },
};
// основной код

gemPuzzle.saveStartDate(); // instead loadStartDate
gemPuzzle.renderMainBlocks();
gemPuzzle.timeRenderer();

gemPuzzle.field = gemPuzzle.getNewField(4);
gemPuzzle.renderField();
let timer = setInterval(gemPuzzle.timeRenderer, 1000, gemPuzzle.startDate);

// при нажатии на кнопки размера под полем
document.getElementById('fieldSize').addEventListener('click', ({ target: { innerText } }) => {
  gemPuzzle.fieldSize = Number(innerText[0]);
  gemPuzzle.field = gemPuzzle.getNewField(Number(innerText[0]));
  gemPuzzle.renderField();
  gemPuzzle.saveStartDate();
  gemPuzzle.timeRenderer();
});

// при нажатии на кнопки настроек снизу (3 вроде штуки)
document.getElementById('buttons').addEventListener('click', ({ target: { id } }) => {
  if (id === 'restart') {
    clearInterval(timer);
    gemPuzzle.saveStartDate();
    timer = setInterval(gemPuzzle.timeRenderer, 1000, gemPuzzle.startDate);

    gemPuzzle.timeRenderer();
    gemPuzzle.field = gemPuzzle.getNewField();
    gemPuzzle.renderField();
    gemPuzzle.moveCounter = 0;
    gemPuzzle.moveCounterRenderer();
  }
  if (id === 'save') alert('save');
  if (id === 'results') alert('results');
});

function tryToShift(i, j) {
  if (gemPuzzle.field[i + 1] && gemPuzzle.field[i + 1][j] === 0) {
    gemPuzzle.field[i + 1][j] = gemPuzzle.field[i][j];
    gemPuzzle.field[i][j] = 0;
    gemPuzzle.renderField();
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i - 1] && gemPuzzle.field[i - 1][j] === 0) {
    gemPuzzle.field[i - 1][j] = gemPuzzle.field[i][j];
    gemPuzzle.field[i][j] = 0;
    gemPuzzle.renderField();
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j - 1] === 0) {
    gemPuzzle.field[i][j - 1] = gemPuzzle.field[i][j];
    gemPuzzle.field[i][j] = 0;
    gemPuzzle.renderField();
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j + 1] === 0) {
    gemPuzzle.field[i][j + 1] = gemPuzzle.field[i][j];
    gemPuzzle.field[i][j] = 0;
    gemPuzzle.renderField();
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
  }
}

function fieldListener() {
  document.getElementById('playingField').addEventListener('click', ({ target: { innerText } }) => {
    for (let i = 0; i < gemPuzzle.field.length; i += 1) {
      for (let j = 0; j < gemPuzzle.field.length; j += 1) {
        if (gemPuzzle.field[i][j] === Number(innerText)) {
          tryToShift(i, j);
          return;
        }
      }
    }
  });
}

fieldListener();


window.addEventListener('resize', () => {
  gemPuzzle.renderField();
});

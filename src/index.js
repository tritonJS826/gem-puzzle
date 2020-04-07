import 'normalize.css';
import './style.css';
import getNewField from './gem-field/getNewField';
import getSolvingField from './gem-field/getSolvingField';
import renderMainBlocks from './gem-field/renderMainBlocks';
import renderField from './gem-field/renderField';
import timeRenderer from './statisticks/timeRenderer';
import tryToShift from './gem-field/tryToShift';
import fieldListener from './gem-field/fieldListener';
import sizeButtonsListener from './sizeAndSettingButtons/settingsButtonsListener';
import settingsButtonsListener from './sizeAndSettingButtons/sizeButtonsListener';

const gemPuzzle = {
  field: [],
  solvingField: [],
  fieldSize: 4,
  moveCounter: 0,
  startDate: 0,
  timer: null,

  getNewField(size = this.fieldSize) {
    return getNewField(size);
  },

  getSolvingField(size = this.fieldSize) {
    getSolvingField(size);
  },

  setNewField(newField) {
    this.field = newField;
  },

  setSolvingField(newSolvingField) {
    this.solvingField = newSolvingField;
  },

  setFieldSize(size) {
    this.fieldSize = size;
  },

  swapWithZeroGem(iFirst, jFirst, iZero, jZero) {
    this.field[iZero][jZero] = this.field[iFirst][jFirst];
    this.field[iFirst][jFirst] = 0;
  },

  tryToShift(i, j) {
    tryToShift(i, j, this);
  },

  saveStartDate() {
    this.startDate = new Date();
  },

  counterPlusOne() {
    this.moveCounter += 1;
  },

  dropCounter() {
    this.moveCounter = 0;
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

  timeRenderer(startDate = this.startDate) {
    timeRenderer(startDate);
  },

  startTimer() {
    this.timer = setInterval(this.timeRenderer, 1000, this.startDate);
  },

  clearTimer() {
    clearInterval(this.timer);
  },

  isWin() {
    for (let i = 0; i < this.field.length; i += 1) {
      for (let j = 0; j < this.field.length; j += 1) {
        if (this.field[i][j] !== this.solvingField[i][j]) return false;
      }
    }
    return true;
  },
};


gemPuzzle.saveStartDate(); // instead loadStartDate
gemPuzzle.renderMainBlocks();
gemPuzzle.timeRenderer();

gemPuzzle.setNewField(gemPuzzle.getNewField(4));
// gemPuzzle.setSolvingField(gemPuzzle.getSolvingField(4));
gemPuzzle.renderField();
gemPuzzle.startTimer();


fieldListener(gemPuzzle);
settingsButtonsListener(gemPuzzle);
sizeButtonsListener(gemPuzzle);

// its our adaptive
window.addEventListener('resize', () => {
  gemPuzzle.renderField();
});

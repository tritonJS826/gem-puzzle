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
import player from './helpers/player';
import renderStatistics from './gem-field/renderStatistics';

const gemPuzzle = {
  field: [],
  solvingField: [],
  isPlayerWork: true,
  fieldSize: 4,
  moveCounter: 0,
  timePassed: 0,
  timer: null,
  statistics: [],

  tooglePlayerWork() {
    this.isPlayerWork = !this.isPlayerWork;
  },

  getNewField(size = this.fieldSize) {
    return getNewField(size);
  },

  getSolvingField(size = this.fieldSize) {
    return getSolvingField(size);
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

  increaseTimePassed() {
    this.timePassed += 1;
    return this.timePassed;
  }, // not working

  resetTimePassed() {
    this.TimePassed = 0;
  },

  swapWithZeroGem(iFirst, jFirst, iZero, jZero) {
    this.field[iZero][jZero] = this.field[iFirst][jFirst];
    this.field[iFirst][jFirst] = 0;
  },

  tryToShift(i, j) {
    tryToShift(i, j, this);
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

  timeRenderer() {
    timeRenderer(this.timePassed);
    this.timePassed += 1;
  },

  startTimer() {
    if (this.timer) return;
    this.timer = setInterval(this.timeRenderer.bind(this), 1000);
  },

  clearTimer() {
    this.timePassed = 0;
    // clearInterval(this.timer);
  },

  player(src) {
    if (this.isPlayerWork)player(src);
  },

  isWin() {
    for (let i = 0; i < this.field.length; i += 1) {
      for (let j = 0; j < this.field.length; j += 1) {
        if (this.field[i][j] !== this.solvingField[i][j]) return false;
      }
    }
    return true;
  },

  tryRecordStatistic() {
    console.log(this.statistics);
    const { moveCounter, timePassed, statistics } = this;
    statistics.push({ moveCounter, timePassed });
    statistics.sort((a, b) => {
      if (a.moveCounter > b.moveCounter) return 1;
      if (a.moveCounter < b.moveCounter) return -1;
      return 0;
    });
    if (statistics.length > 10) statistics.pop();
  },

  saveStatistics() {
    localStorage.setItem('statistics', JSON.stringify(this.statistics));
  },

  saveGame() {
    localStorage.setItem('game', JSON.stringify({
      field: this.field,
      solvingField: this.solvingField,
      fieldSize: this.fieldSize,
      moveCounter: this.moveCounter,
      timePassed: this.timePassed,
    }));
  },

  loadStatistics() {
    const statistics = JSON.parse(localStorage.getItem('statistics'));
    if (!statistics) return;
    this.statistics = statistics;
  },

  loadGame() {
    const gameData = JSON.parse(localStorage.getItem('game'));
    if (!gameData) return;
    this.field = gameData.field;
    this.solvingField = gameData.solvingField;
    this.fieldSize = gameData.fieldSize;
    this.moveCounter = gameData.moveCounter;
    this.timePassed = gameData.timePassed;
  },

  renderStatistics() {
    renderStatistics(this.statistics);
  },
};

alert('половину игр закончить успешно нельзя, в таком случае не бойтесь просто начать новую)');
gemPuzzle.loadStatistics();
gemPuzzle.loadGame();

gemPuzzle.renderMainBlocks();
gemPuzzle.moveCounterRenderer();
gemPuzzle.timeRenderer();

gemPuzzle.setNewField(gemPuzzle.getNewField(4));
gemPuzzle.setSolvingField(gemPuzzle.getSolvingField(4));

gemPuzzle.renderField();
gemPuzzle.renderStatistics();
gemPuzzle.startTimer();


fieldListener(gemPuzzle);
settingsButtonsListener(gemPuzzle);
sizeButtonsListener(gemPuzzle);

// its our adaptive
window.addEventListener('resize', () => {
  gemPuzzle.renderField();
});

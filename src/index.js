
import 'normalize.css';
import './style.css';
import LOCAL_STORAGE_CONFIG from './constants/LOCAL_STORAGE_CONFIG';
import getNewField from './gem-field/getNewField';
import getSolvingField from './gem-field/getSolvingField';
import renderMainBlocks from './gem-field/renderMainBlocks';
import renderField from './gem-field/renderField';
import timeRenderer from './statisticks/timeRenderer';
import errorSound from './assets/sounds/error.mp3';
import fieldListener from './gem-field/fieldListener';
import sizeButtonsListener from './sizeAndSettingButtons/settingsButtonsListener';
import settingsButtonsListener from './sizeAndSettingButtons/sizeButtonsListener';
import player from './helpers/player';
import moveSound from './assets/sounds/moving.mp3';
import { setPopupMessage, enablePopupMessage, disablePopupMessage } from './sizeAndSettingButtons/popup';

const storage = localStorage;

const gemPuzzle = {
  field: [],
  solvingField: [],
  tisPlayerWork: true,
  fieldSize: 4,
  moveCounter: 0,
  timePassed: 0,
  timer: null,
  statistics: [],
  popupMessage: 'половину игр закончить успешно нельзя, в таком случае не бойтесь просто начать новую',
  isPopupMessageVisible: true,

  setPopupMessage(message) {
    this.popupMessage = message;
    setPopupMessage();
  },

  enablePopupMessage(message = this.message) {
    this.popupMessage = message;
    this.isPopupMessageVisible = true;
    enablePopupMessage(message);
  },

  disablePopupMessage() {
    this.isPopupMessageVisible = false;
    disablePopupMessage();
  },

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
  },

  resetTimePassed() {
    this.TimePassed = 0;
  },

  swapWithZeroGem(iFirst, jFirst, iZero, jZero) {
    this.field[iZero][jZero] = this.field[iFirst][jFirst];
    this.field[iFirst][jFirst] = 0;
  },

  tryToShift(i, j, gemNumber) {
    const isZeroTop = gemPuzzle.field[i + 1] && gemPuzzle.field[i + 1][j] === 0;
    const isZeroRight = gemPuzzle.field[i - 1] && gemPuzzle.field[i - 1][j] === 0;
    const isZeroLeft = gemPuzzle.field[i][j - 1] === 0;
    const isZeroBottom = gemPuzzle.field[i][j + 1] === 0;

    if (isZeroTop) {
      gemPuzzle.swapWithZeroGem(i, j, i + 1, j);
    }

    if (isZeroRight) {
      gemPuzzle.swapWithZeroGem(i, j, i - 1, j);
    }
    if (isZeroLeft) {
      gemPuzzle.swapWithZeroGem(i, j, i, j - 1);
    }
    if (isZeroBottom) {
      gemPuzzle.swapWithZeroGem(i, j, i, j + 1);
    }

    if (isZeroTop || isZeroLeft || isZeroRight || isZeroBottom) {
      gemPuzzle.shift(gemNumber);
      const movingBlock = document.querySelector(`[data-num="${gemNumber}"]`);
      movingBlock.classList.add('scaling-animation');
    } else {
      gemPuzzle.player(errorSound);
    }
  },

  shift(/* gemNumber */) {
    this.player(moveSound);
    this.renderField();

    if (this.isWin()) {
      this.enablePopupMessage(`Вы выиграли! Ходов:${this.moveCounter}, Время:${this.timePassed}`);

      this.tryRecordStatistic();
      this.saveStatistics();
    }
    this.counterPlusOne();
    this.moveCounterRenderer();
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
    this.timer = setInterval(() => {
      timeRenderer(this.timePassed);
      this.timePassed += 1;
    }, 1000);
  },

  clearTimer() {
    this.timePassed = 0;
  },

  player(src) {
    if (this.isPlayerWork) {
      player(src);
    }
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
    const {
      moveCounter,
      timePassed,
      statistics,
    } = this;
    statistics.push({
      moveCounter,
      timePassed,
    });
    statistics.sort((a, b) => (a.moveCounter - b.moveCounter));
    if (statistics.length > 10) statistics.pop();
  },

  saveStatistics() {
    storage.setItem(LOCAL_STORAGE_CONFIG.statistics, JSON.stringify(this.statistics));
  },

  saveGame() {
    storage.setItem(LOCAL_STORAGE_CONFIG.game, JSON.stringify({
      field: this.field,
      solvingField: this.solvingField,
      fieldSize: this.fieldSize,
      moveCounter: this.moveCounter,
      timePassed: this.timePassed,
    }));
  },

  loadStatistics() {
    const statistics = JSON.parse(storage.getItem(LOCAL_STORAGE_CONFIG.statistics));
    if (statistics) {
      this.statistics = statistics;
    }
  },

  loadGame() {
    const gameData = JSON.parse(storage.getItem(LOCAL_STORAGE_CONFIG.game));
    if (!gameData) return;
    this.field = gameData.field;
    this.solvingField = gameData.solvingField;
    this.fieldSize = gameData.fieldSize;
    this.moveCounter = gameData.moveCounter;
    this.timePassed = gameData.timePassed;
  },
};

gemPuzzle.loadStatistics();
gemPuzzle.loadGame();

gemPuzzle.renderMainBlocks();
gemPuzzle.moveCounterRenderer();
gemPuzzle.timeRenderer();

gemPuzzle.setNewField(gemPuzzle.getNewField(4));
gemPuzzle.setSolvingField(gemPuzzle.getSolvingField(4));

gemPuzzle.renderField();
gemPuzzle.startTimer();


fieldListener(gemPuzzle);
settingsButtonsListener(gemPuzzle);
sizeButtonsListener(gemPuzzle);

window.addEventListener('resize', () => {
  gemPuzzle.renderField();
});

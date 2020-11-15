import moveSound from '../assets/sounds/moving.mp3';
import errorSound from '../assets/sounds/error.mp3';

function tryToShift(i, j, gemPuzzle) {
  if (gemPuzzle.field[i + 1] && gemPuzzle.field[i + 1][j] === 0) {
    gemPuzzle.player(moveSound);
    gemPuzzle.swapWithZeroGem(i, j, i + 1, j);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.timePassed}`);
      // congratulations
      gemPuzzle.tryRecordStatistic();
      gemPuzzle.saveStatistics();
      // save state
      // render new game
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i - 1] && gemPuzzle.field[i - 1][j] === 0) {
    gemPuzzle.player(moveSound);
    gemPuzzle.swapWithZeroGem(i, j, i - 1, j);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.timePassed}`);
      // congratulations
      gemPuzzle.tryRecordStatistic();
      gemPuzzle.saveStatistics();
      // render new game
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j - 1] === 0) {
    gemPuzzle.player(moveSound);
    gemPuzzle.swapWithZeroGem(i, j, i, j - 1);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.timePassed}`);
      // congratulations
      gemPuzzle.tryRecordStatistic();
      gemPuzzle.saveStatistics();
      // render new game
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j + 1] === 0) {
    gemPuzzle.player(moveSound);
    gemPuzzle.swapWithZeroGem(i, j, i, j + 1);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.timePassed}`);
      // congratulations
      gemPuzzle.tryRecordStatistic();
      gemPuzzle.saveStatistics();
      // render new game
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  gemPuzzle.player(errorSound);
}

export default tryToShift;

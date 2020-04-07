function tryToShift(i, j, gemPuzzle) {
  if (gemPuzzle.field[i + 1] && gemPuzzle.field[i + 1][j] === 0) {
    gemPuzzle.swapWithZeroGem(i, j, i + 1, j);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.date}`);
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i - 1] && gemPuzzle.field[i - 1][j] === 0) {
    gemPuzzle.swapWithZeroGem(i, j, i - 1, j);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.date}`);
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j - 1] === 0) {
    gemPuzzle.swapWithZeroGem(i, j, i, j - 1);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.date}`);
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
    return;
  }
  if (gemPuzzle.field[i][j + 1] === 0) {
    gemPuzzle.swapWithZeroGem(i, j, i, j + 1);
    gemPuzzle.renderField();
    if (gemPuzzle.isWin()) {
      alert(`Вы выйграли! Ходов:${gemPuzzle.moveCounter}, Время:${gemPuzzle.date}`);
    }
    gemPuzzle.counterPlusOne();
    gemPuzzle.moveCounterRenderer();
  }
}

export default tryToShift;

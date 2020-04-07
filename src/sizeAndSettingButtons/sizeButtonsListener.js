// при нажатии на кнопки размера под полем

function sizeButtonsListener(gemPuzzle) {
  document.getElementById('fieldSize').addEventListener('click', ({ target: { innerText } }) => {
    gemPuzzle.setFieldSize(Number(innerText[0]));
    gemPuzzle.setNewField(gemPuzzle.getNewField(Number(innerText[0])));
    // gemPuzzle.setSolvingField(gemPuzzle.getSolvingField(Number(innerText[0])));
    gemPuzzle.renderField();
    gemPuzzle.clearTimer();
    gemPuzzle.saveStartDate();
    gemPuzzle.startTimer();
    gemPuzzle.timeRenderer();
    gemPuzzle.dropCounter();
    gemPuzzle.moveCounterRenderer();
  });
}
export default sizeButtonsListener;

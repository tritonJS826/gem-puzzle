// при нажатии на кнопки размера под полем

function sizeButtonsListener(gemPuzzle) {
  document.getElementById('field-size').addEventListener('click', ({ target }) => {
    const size = Number(target.getAttribute('data-size'));

    gemPuzzle.setFieldSize(size);
    gemPuzzle.setNewField(gemPuzzle.getNewField(size));
    gemPuzzle.setSolvingField(gemPuzzle.getSolvingField(size));
    gemPuzzle.renderField();
    gemPuzzle.clearTimer();
    gemPuzzle.resetTimePassed();
    gemPuzzle.startTimer();
    gemPuzzle.timeRenderer();
    gemPuzzle.dropCounter();
    gemPuzzle.moveCounterRenderer();
  });
}
export default sizeButtonsListener;

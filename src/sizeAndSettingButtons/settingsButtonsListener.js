// при нажатии на кнопки настроек снизу (3 вроде штуки)
function settingsButtonsListener(gemPuzzle) {
  document.getElementById('buttons').addEventListener('click', ({ target: { id } }) => {
    if (id === 'restart') {
      gemPuzzle.clearTimer();
      gemPuzzle.saveStartDate();
      gemPuzzle.startTimer();
      gemPuzzle.timeRenderer();
      // gemPuzzle.setNewField(gemPuzzle.getNewField());
      gemPuzzle.renderField();
      gemPuzzle.dropCounter();
      gemPuzzle.moveCounterRenderer();
    }
    if (id === 'save') alert('save');
    if (id === 'results') alert('results');
  });
}

export default settingsButtonsListener;

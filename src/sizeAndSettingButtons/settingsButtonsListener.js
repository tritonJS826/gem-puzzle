function settingsButtonsListener(gemPuzzle) {
  document.getElementById('buttons').addEventListener('click', ({ target: { id } }) => {
    if (id === 'restart') {
      gemPuzzle.clearTimer();
      gemPuzzle.resetTimePassed();
      gemPuzzle.startTimer();
      gemPuzzle.timeRenderer();
      gemPuzzle.setNewField(gemPuzzle.getNewField());
      gemPuzzle.renderField();
      gemPuzzle.dropCounter();
      gemPuzzle.moveCounterRenderer();
    }
    if (id === 'save') {
      gemPuzzle.saveGame();
      alert('saving coplited');
    }
    if (id === 'disableSound') gemPuzzle.tooglePlayerWork();
  });
}

export default settingsButtonsListener;

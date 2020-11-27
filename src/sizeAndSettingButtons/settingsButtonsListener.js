const statisticToString = (data, i) => `${i + 1} Ходов:${data.moveCounter} Время:${data.timePassed}`;

const settingsButtonsListener = (gemPuzzle) => {
  document.getElementById('restart').addEventListener('click', () => {
    gemPuzzle.clearTimer();
    gemPuzzle.resetTimePassed();
    gemPuzzle.startTimer();
    gemPuzzle.timeRenderer();
    gemPuzzle.setNewField(gemPuzzle.getNewField());
    gemPuzzle.renderField();
    gemPuzzle.dropCounter();
    gemPuzzle.moveCounterRenderer();
  });

  document.getElementById('save').addEventListener('click', () => {
    gemPuzzle.saveGame();
    gemPuzzle.enablePopupMessage('saved succesfully');
  });

  document.getElementById('disableSound').addEventListener('click', () => {
    gemPuzzle.tooglePlayerWork();
  });

  document.getElementById('close').addEventListener('click', () => {
    gemPuzzle.disablePopupMessage();
  });

  document.getElementById('statistics').addEventListener('click', () => {
    const { statistics } = gemPuzzle;

    gemPuzzle.enablePopupMessage(`Статистика: \n ${statistics.map(statisticToString).join(',\n')}`);
  });
};


export default settingsButtonsListener;

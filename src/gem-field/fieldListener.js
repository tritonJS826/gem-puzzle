function fieldListener(gemPuzzle) {
  document.getElementById('playingField').addEventListener('click', ({ target: { innerText } }) => {
    for (let i = 0; i < gemPuzzle.field.length; i += 1) {
      for (let j = 0; j < gemPuzzle.field.length; j += 1) {
        if (gemPuzzle.field[i][j] === Number(innerText)) {
          gemPuzzle.tryToShift(i, j);
          return;
        }
      }
    }
  });
}

export default fieldListener;

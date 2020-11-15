/*eslint-disable*/
const moveAt = (pageX, pageY, target) => {
  target.style.left = pageX - target.offsetWidth / 2 + 'px';
  target.style.top = pageY - target.offsetHeight / 2 + 'px';
};

const onMouseMove = (event, target) => {
  moveAt(event.pageX, event.pageY, target);
};

const onGemClick = ({ target: { innerText } }, gemPuzzle) => {
  for (let i = 0; i < gemPuzzle.field.length; i += 1) {
    for (let j = 0; j < gemPuzzle.field.length; j += 1) {
      if (gemPuzzle.field[i][j] === Number(innerText)) {
        gemPuzzle.tryToShift(i, j);
        return;
      }
    }
  }
};

function fieldListener(gemPuzzle) {
  const playingField = document.getElementById('playingField');

  // playingField.addEventListener('click', onGemClick);

  playingField.addEventListener('mousedown', ({ target }) => {
    const cloneTarget = target.cloneNode(true);
    cloneTarget.style.position = 'absolute';
    cloneTarget.style.zIndex = 1000;
    cloneTarget.classList.add('clone');
    document.body.append(cloneTarget);
    moveAt(event.pageX, event.pageY, cloneTarget);
    document.addEventListener('mousemove', (e) => onMouseMove(e, cloneTarget));
    cloneTarget.ondragstart = () => false;
  });

  document.addEventListener('mouseup', ({ target }) => {
    if (target.classList.contains('clone')) {
      const number = target.innerText;
      onGemClick({ target }, gemPuzzle);
      target.remove();
      document.removeEventListener('mousemove', (e) => onMouseMove(e, target));
      target.onmouseup = null;
      target.ondragstart = () => false;
    }
  });
}

export default fieldListener;

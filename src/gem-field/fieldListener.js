const moveAt = (pageX, pageY, target) => {
  target.style.left = `${pageX - target.offsetWidth / 2}px`;
  target.style.top = `${pageY - target.offsetHeight / 2}px`;
};

const onMouseMove = (event, target) => {
  moveAt(event.pageX, event.pageY, target);
};

const onGemClick = ({ target: { innerText } }, field, tryToShift) => {
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      if (field[i][j] === Number(innerText)) {
        tryToShift(i, j, innerText);
        return;
      }
    }
  }
};

function fieldListener(gemPuzzle) {
  const playingField = document.getElementById('field');

  playingField.addEventListener('mousedown', (event) => {
    const { target } = event;
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
      onGemClick({ target }, gemPuzzle.field, gemPuzzle.tryToShift);
      target.remove();
      document.removeEventListener('mousemove', (e) => onMouseMove(e, target));
      target.onmouseup = null;
      target.ondragstart = () => false;
    }
  });
}

export default fieldListener;

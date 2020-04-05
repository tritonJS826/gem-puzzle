function renderField(field) {
  const PLAYING_FIELD = document.getElementById('playingField');
  PLAYING_FIELD.innerHTML = '';
  const WIDTH = document.documentElement.clientWidth - 30;
  PLAYING_FIELD.style.width = `${WIDTH}px`;
  PLAYING_FIELD.style.height = `${(WIDTH) / 2}px`;
  // [...document.querySelectorAll('gem')].forEach(() => {  });
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      PLAYING_FIELD.innerHTML += `
      <div class="gem ${field[i][j] === 0 ? 'gem_empty' : ''}"
      style="width:${WIDTH / field.length - 1}px; height:${WIDTH / field.length / 2}px"><span>${field[i][j]}</span><div>
      `;
    }
  }
}

export default renderField;

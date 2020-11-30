const getIIndex = (number, length) => Math.ceil(number / length);

const getJIndex = (number, length) => length - (number % length);

const renderField = (field) => {
  const WIDTH_PADDING = 40;
  const HEIGHT_PADDING = 100;

  const playingField = document.getElementById('field');
  const width = document.documentElement.clientWidth - WIDTH_PADDING;
  const height = document.documentElement.clientWidth - HEIGHT_PADDING;

  playingField.style.width = `${width}px`;
  playingField.style.height = `${(height) / 2}px`;

  playingField.innerHTML = '';

  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      const iIndex = (getIIndex(field[i][j], field.length) * field.length) * 100;
      const jIndex = (getJIndex(field[i][j], field.length) * field.length) * 100;

      playingField.innerHTML += `
      <div class="gem ${field[i][j] === 0 ? 'gem--empty' : ''}"
      style="background-position: top ${iIndex}% left ${jIndex}% ;background-image: url(https://images-na.ssl-images-amazon.com/images/I/71FVKdseAtL._SL1042_.jpg); width:${width / field.length - 1}px; height:${height / field.length / 2}px"
      data-num="${field[i][j]}">${[field[i][j]]}</div>
      `;
    }
  }
};
export default renderField;

function renderMainBlocks() {
  document.body.innerHTML = `
    <div class="statistic" id="statistic">
      <span id="moveCounter">Ходов: 0</span>, <span id="time"></span>
    </div>
    <div class="playingField" id="playingField"></div>
    <div class="setting" id="settings">
    <div class="fieldSize" id="fieldSize">
      <span class="fieldSize--size">2x2 </span>
      <span class="fieldSize--size">3x3 </span>
      <span class="fieldSize--size">4x4</span>
      <span class="fieldSize--size">5x5 </span>
      <span class="fieldSize--size">6x6 </span>
      <span class="fieldSize--size">7x7 </span>
      <span class="fieldSize--size">8x8 </span>
    </div>
    <div class="buttons" id="buttons">
      <div class="buttons--but" id="restart">Начать заново</div>
      <div class="buttons--but" id="save">Сохранить</div>
      <div class="buttons--but" id="disableSound">Звук вкл/выкл</div>
    </div>
    </div>
  `;
}

export default renderMainBlocks;

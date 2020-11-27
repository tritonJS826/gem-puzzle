function renderMainBlocks() {
  document.body.innerHTML = `
    <div class="statistic" id="statistic">
      <span id="moveCounter">Ходов: 0</span>, <span id="time"></span>
    </div>
    <div class="field" id="field"></div>
    <div class="setting" id="settings">
    <div class="field--size" id="field--size">
      <span class="field--size__size" data-size="2">2x2 </span>
      <span class="field--size__size" data-size="3">3x3 </span>
      <span class="field--size__size" data-size="4">4x4 </span>
      <span class="field--size__size" data-size="5">5x5 </span>
      <span class="field--size__size" data-size="6">6x6 </span>
      <span class="field--size__size" data-size="7">7x7 </span>
      <span class="field--size__size" data-size="8">8x8 </span>
    </div>
    <div class="buttons" id="buttons">
      <div class="buttons__but" id="restart">Начать заново</div>
      <div class="buttons__but" id="save">Сохранить</div>
      <div class="buttons__but" id="disableSound">Звук вкл/выкл</div>
      <div class="buttons__but" id="statistics">Статистика</div>
    </div>
    </div>
    <div id="popup" class="popup">
      <span class="close" id="close">x</span>
      <p id="message" class="message">
      половину игр закончить успешно нельзя, в таком случае не бойтесь просто начать новую
      </p>
    </div>
  `;
}

export default renderMainBlocks;

export default function renderStatistics(stat) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `Статистика:
  ${stat
    .map((el, i) => `<p>${i + 1}. Время: ${el.moveCounter} Ходов:${el.timePassed}</p>`)
    .join('<br>')}`,
  );
}

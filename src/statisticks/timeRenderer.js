/*eslint-disable*/
function timeRenderer(timePassed) {
  // const startDate = new Date();
  // const NOW = new Date();
  const TIMERBLOCK = document.getElementById('time');
  // const ALL_SECONDS = Math.round((NOW.getTime() - startDate.getTime()) / 1000);
  const ALL_SECONDS = timePassed;
  const MIN = Math.floor(ALL_SECONDS / 60);
  const SEC = ALL_SECONDS - MIN * 60;

  TIMERBLOCK.innerText = `Время: ${MIN}:${SEC}`;
}

export default timeRenderer;

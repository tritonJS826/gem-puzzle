function timeRenderer(startDate) {
  const NOW = new Date();
  const TIMERBLOCK = document.getElementById('time');
  const ALL_SECONDS = Math.round((NOW.getTime() - startDate.getTime()) / 1000);
  const MIN = Math.floor(ALL_SECONDS / 60);
  const SEC = ALL_SECONDS - MIN * 60;

  TIMERBLOCK.innerText = `${MIN} min :${SEC} sec`;
}


export default timeRenderer;

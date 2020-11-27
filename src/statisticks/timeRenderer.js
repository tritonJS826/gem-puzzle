const SECONDS_PER_MINUTE = 60;

const timeRenderer = (passedSeconds) => {
  const timerBlock = document.getElementById('time');

  const minutes = Math.floor(passedSeconds / SECONDS_PER_MINUTE);
  const seconds = passedSeconds - minutes * SECONDS_PER_MINUTE;

  timerBlock.innerText = `Время: ${minutes}:${seconds}`;
};

export default timeRenderer;

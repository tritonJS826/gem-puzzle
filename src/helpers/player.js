const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

export default playSound;

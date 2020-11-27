const shuffle = (array, repeat) => {
  for (let i = 0; i <= repeat; i += 1) {
    array.sort(() => Math.random() - 0.5);
  }
};

export default shuffle;

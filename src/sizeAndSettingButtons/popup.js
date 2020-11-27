export const setPopupMessage = (message) => {
  const currentText = document.getElementById('message');
  currentText.innerText = message;
};

export const enablePopupMessage = (message) => {
  if (message) {
    setPopupMessage(message);
  }
  const popupBlock = document.getElementById('popup');
  popupBlock.classList.remove('invisible');
};

export const disablePopupMessage = () => {
  const popupBlock = document.getElementById('popup');
  popupBlock.classList.add('invisible');
};

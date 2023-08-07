function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-input`);
  console.log(errorMessageEl);
  // inputEl.classList.add(inputErrorClass);
  // errorMessageEl.textContent = inputEl.validationMessage;
  // errorMessageEl.classList.add(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl.inputEl, options);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
    });
  });
}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
    // loof for all inputs inside of form
    // loop through all the inputs to see if all are valid
    // if input is not valid
    // grab validation message
    // add error class to input
    // display error message
    // disable button
    // if all inputs are valid
    // enable button
    // reset error messages
  });
}

const config = {
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__container-button",
  inputErrorClass: ".modal__input-error",
  errorClass: ".modal__input-error_visible",
};

enableValidation(config);

var feedback = document.querySelector(".footer-map__btn");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var userName = document.querySelector("[name=name]");
var form = document.querySelector(".modal-form");
var email = document.querySelector("[name=email]");
var storage = localStorage.getItem("name");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }  else {
    localStorage.setItem("name", userName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

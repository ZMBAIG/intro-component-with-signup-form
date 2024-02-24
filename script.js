const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");

const inputValidity = () => {
  firstName.value.trim() === ""
    ? firstName.parentElement.classList.add("error")
    : firstName.parentElement.classList.remove("error");
  lastName.value.trim() === ""
    ? lastName.parentElement.classList.add("error")
    : lastName.parentElement.classList.remove("error");
  password.value.trim() === ""
    ? password.parentElement.classList.add("error")
    : password.parentElement.classList.remove("error");
};

submitButton.addEventListener("click", inputValidity);

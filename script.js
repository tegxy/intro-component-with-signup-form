const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector(".submit");

submitButton.onclick = function (e) {
  e.preventDefault(); //prevent form submission

  //function for adding error
  const showError = function (input, errorIcon, errorText, message) {
    input.classList.add("error");
    errorIcon.style.display = "inline-block";
    errorText.textContent = message;
  };

  inputs.forEach((input) => {
    const wrapper = input.parentElement;
    const errorIcon = wrapper.querySelector(".error-icon");
    const errorText = wrapper.nextElementSibling;
    const content = input.value.trim(); //remove whitespace
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //reset
    input.classList.remove("error");
    errorIcon.style.display = "none";
    errorText.textContent = "";

    if (input.name === "fname" && content === "") {
      showError(input, errorIcon, errorText, "enter first name");
    }
  });
};

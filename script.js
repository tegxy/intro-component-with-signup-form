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
      showError(input, errorIcon, errorText, "First Name cannot be empty");
    } else if (input.name === "lname" && content == "") {
      showError(input, errorIcon, errorText, "Last Name cannot be empty");
    } else if (input.name === "email") {
      if (content === "" || !emailPattern.test(content)) {
        showError(
          input,
          errorIcon,
          errorText,
          "Looks like this isn't an email"
        );
        document.getElementById("email").style.color = "var(--red-color-400)";
      }
    } else if (input.name === "password" && content === "") {
      showError(input, errorIcon, errorText, "Password cannot be empty");
    }
  });
};

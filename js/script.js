let fullName = document.getElementById("fullName");
let emailAddress = document.getElementById("ُemailAddress");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let contactBtn = document.getElementById("contactBtn");
let successBox = document.getElementById("successMessage");

contactBtn.addEventListener("click", (a) => {
  let hasError = false;

  if (fullName.value === "") {
    fullName.nextElementSibling.style.display = "block";
    hasError = true;
  }

  if (emailAddress.value === "") {
    emailAddress.nextElementSibling.style.display = "block";
    hasError = true;
  }

  if (subject.value === "") {
    subject.nextElementSibling.style.display = "block";
    hasError = true;
  }

  if (message.value === "") {
    message.nextElementSibling.style.display = "block";
    hasError = true;
  }

  if (hasError) {
    a.preventDefault();
  } else {
    successBox.style.opacity = "1";
    setTimeout(() => {
      successBox.style.opacity = "0";
    }, 5000);

    clearInputs();
  }
});

fullName.addEventListener("input", () => {
  fullName.nextElementSibling.style.display = "none";
});
emailAddress.addEventListener("input", () => {
  emailAddress.nextElementSibling.style.display = "none";
});
subject.addEventListener("input", () => {
  subject.nextElementSibling.style.display = "none";
});
message.addEventListener("input", () => {
  message.nextElementSibling.style.display = "none";
});

function clearInputs() {
  fullName.value = "";
  emailAddress.value = "";
  subject.value = "";
  message.value = "";
}

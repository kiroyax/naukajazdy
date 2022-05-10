// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "a.j.cwiklak@gmail.com",
//     Password: "Karaluszek378123#",
//     To: "cwiklak.a.j@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "Wiadomość z formularza na stronie",
//     Body:
//       "Imię:" +
//       getElementById("name").value +
//       "<br>" +
//       "E-mail:" +
//       getElementById("email").value +
//       "<br>" +
//       "Treść wiadomości:" +
//       getElementById("message").value,
//   }).then((message) => alert(message));
// }

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Pole nie może być puste";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Niepoprawny adres e-mail";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Pole nie może być puste";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Wiadomość wysłana!";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

const btGetInTouch = document.getElementById("bt-get-in-touch");
const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputEmail = document.getElementById("emailAddress");
const inputMessage = document.getElementById("message");
const form = document.getElementById("form");
const ctMessage = document.getElementById("ct-message");
const errorMsg = document.getElementById("error-msg");
const errorMsg2 = document.getElementById("error-msg2");
const btContinue = document.getElementById("bt-continue");
const inputEmail2 = document.getElementById("emailAddress2");
const ctInputEmail2 = document.getElementById("input");

const regexName = /^[a-zA-Z\s]*$/;
const regexEmail = /\w+@\w+\.\w+/;

const dataList = [];
let countDataList = 0;

if (inputFirstName.value == "" || inputLastName.value == "" || inputEmail.value == "" || inputMessage.value == "") {
  btGetInTouch.disabled = true;
}

const handleBtGetInTouch = () => {
  if (!regexName.test(inputFirstName.value) || !regexName.test(inputLastName.value)) {
    errorMsg.innerText = "*First name or last nameformat error";
    return;
  } else {
    errorMsg.innerText = "";
  }

  if (!regexEmail.test(inputEmail.value)) {
    errorMsg.innerText = "*Email format error";
    return;
  } else {
    errorMsg.innerText = "";
  }

  if (inputMessage.value.length < 10) {
    errorMsg.innerText = "*Message must have at least 10 characters";
    return;
  } else {
    errorMsg.innerText = "";
  }

  const newData = {
    id: countDataList++,
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };

  dataList.push(newData);
  localStorage.setItem("dataList", JSON.stringify(dataList));

  window.location.href = "/home.html";
};

const handleForm = () => {
  if (inputFirstName.value == "" || inputLastName.value == "" || inputEmail.value == "" || inputMessage.value == "") {
    btGetInTouch.disabled = true;
  } else {
    btGetInTouch.disabled = false;
  }
};

const handleBtContinue = () => {
  if (!regexEmail.test(inputEmail2.value)) {
    errorMsg2.innerText = "*Email format error";
    return;
  } else {
    errorMsg2.innerText = "";
  }
};

btGetInTouch.onclick = handleBtGetInTouch;
form.onchange = handleForm;
btContinue.onclick = handleBtContinue;

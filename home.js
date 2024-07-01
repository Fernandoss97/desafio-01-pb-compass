const inputEmail2 = document.getElementById("emailAddress2");
const btContinue = document.getElementById("bt-continue");
const errorMsg2 = document.getElementById("error-msg2");

const regexEmail = /\w+@\w+\.\w+/;

const handleBtContinue = () => {
  if (!regexEmail.test(inputEmail2.value)) {
    errorMsg2.innerText = "*Email format error";
    return;
  } else {
    errorMsg2.innerText = "";
  }
};

btContinue.onclick = handleBtContinue;

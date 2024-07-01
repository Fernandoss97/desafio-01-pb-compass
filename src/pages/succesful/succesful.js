const btBack = document.getElementById("bt-back");
const list = document.getElementById("list");

const handleBtBack = () => {};

const handleLoad = () => {
  const dataList = JSON.parse(localStorage.getItem("dataList"));

  dataList.forEach(data => {
    let listItem = document.createElement("li");

    listItem.innerHTML = `Id: ${data.id} - First name: ${data.firstName} - Last name: ${data.lastName} - Email: ${data.email} - Message: ${data.message}`;

    list.appendChild(listItem);
  });
};

btBack.onclick = handleBtBack;
window.onload = handleLoad;

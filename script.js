"use strict";

//Task

const form = document.querySelector("form");
const errorMessage = document.querySelector(".error_message");
const list = document.getElementById("list");
const { text_input, button } = form;

form.onsubmit = (event) => {
  event.preventDefault();
  if (text_input.value.trim().length === 0) {
    text_input.classList.add("error");
    errorMessage.innerHTML = "Please enter text!";
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list_item");
  li.innerHTML = text_input.value;
  list.append(li);
  form.reset();

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("remove_button");
  buttonDelete.textContent = "delete";
  li.append(buttonDelete);

  text_input.oninput = () => {
    const isErrorField = text_input.classList.contains("error");

    if (isErrorField) {
      text_input.classList.remove("error");
      errorMessage.innerHTML = "";
    }
  };
};

list.addEventListener("click", (event) => {
  const isRemoveButton = event.target.className === "remove_button";

  if (isRemoveButton) {
    const rowList = event.target.closest(".list_item");
    rowList.remove();
  }
});

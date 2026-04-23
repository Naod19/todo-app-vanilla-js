// Steps needed
// 1. retrieve html elements
// 2. create function that create an li element and save the value of the input
// 3. add a delete button to the li and save it to local storage
const toDoInput = document.querySelector(".to-do-input");
const addBtn = document.querySelector(".add-btn");
const toDoList = document.querySelector(".to-do-list");
const array = JSON.parse(localStorage.getItem("arrayList")) || [];

array.forEach((items) => {
  createTask(items);
});

addBtn.addEventListener("click", function () {
  const inputValue = toDoInput.value;
  createTask(inputValue);
  array.push(inputValue);

  localStorage.setItem("arrayList", JSON.stringify(array));
});

function createTask(task) {
  const list = document.createElement("li");
  list.textContent = task;
  list.classList.add("list-js");
  toDoList.appendChild(list);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Task";
  deleteBtn.classList.add("btn-js");
  list.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    list.remove();
    const index = array.findIndex((item) => {
      return item === task;
    });
    array.splice(index, 1);
    localStorage.setItem("arrayList", JSON.stringify(array));
  });
}

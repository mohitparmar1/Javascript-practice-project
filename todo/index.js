function addToDo() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const todoEl = document.querySelector("#todos");

  const todo = document.createElement("div");
  const todoTitle = document.createElement("h3");
  const todoDescription = document.createElement("p");
  const todoDelete = document.createElement("button");

  todoTitle.innerHTML = "Title :" + title;
  todoDescription.innerHTML = "Description" + description;
  todoDelete.innerHTML = "Delete";

  todo.appendChild(todoTitle);
  todo.appendChild(todoDescription);
  todo.appendChild(todoDelete);
  todoEl.appendChild(todo);

  todoDelete.addEventListener("click", () => {
    todoEl.removeChild(todo);
  });

  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
}

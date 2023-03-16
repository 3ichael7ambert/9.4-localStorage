
// const toDoForm = document.getElementById("toDoForm");
// const toDoList = document.getElementById("toDoList");

// // retrieve from localStorage
// const savedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
// for (let i = 0; i < savedToDos.length; i++) {
//   let newToDo = document.createElement("li");
//   newToDo.innerHTML = savedToDos[i].taskBox;

//   newToDo.isCompleted = savedToDos[i].isCompleted ? true : false;
//   if (newToDo.isCompleted) {
//     newToDo.style.textDecoration = "line-through";
//     newToDo.style.color = "grey";
//   }
//   toDoList.appendChild(newToDo);
// }

// toDoForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let newToDo = document.createElement("li");
//   let taskValue = document.getElementById("taskBox").value;
//   newToDo.innerHTML = taskValue;
//   newToDo.isCompleted = false;
//   toDoForm.reset();
//   toDoList.appendChild(newToDo);

//   // save to localStorage
//   savedToDos.push({ taskBox: newToDo.innerHTML, isCompleted: false });
//   localStorage.setItem("toDos", JSON.stringify(savedToDos));
// });

// toDoList.addEventListener("click", function(event) {
//   let clickedListItem = event.target;

//   if (!clickedListItem.isCompleted) {
//     clickedListItem.style.textDecoration = "line-through";
//     clickedListItem.style.color = "grey";
//     clickedListItem.isCompleted = true;
//   } else {
//     clickedListItem.style.textDecoration = "none";
//     clickedListItem.isCompleted = false;
//   }

//   // breaks for duplicates - another option is to have dynamic IDs
//   for (let i = 0; i < savedToDos.length; i++) {
//     if (savedToDos[i].taskBox === clickedListItem.innerHTML) {
//       savedToDos[i].isCompleted = !savedToDos[i].isCompleted;
//       localStorage.setItem("toDos", JSON.stringify(savedToDos));
//     }
//   }
// });





const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newTodo);

  // save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});


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

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedToDos.length; i++) {
    if (savedToDos[i].taskBox === clickedListItem.innerHTML) {
      savedToDos[i].isCompleted = !savedToDos[i].isCompleted;
      localStorage.setItem("toDos", JSON.stringify(savedToDos));
    }
  }
});







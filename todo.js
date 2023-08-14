// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get form and list elements
  const toDoForm = document.getElementById("toDoFormCSS");
  const toDoList = document.getElementById("toDoListCSS");

  // Retrieve from localStorage
  const savedToDos = JSON.parse(localStorage.getItem("toDos")) || [];

  // Create To-Do list items from storage
  for (let i = 0; i < savedToDos.length; i++) {
    let newToDo = document.createElement("li");
    newToDo.innerHTML = savedToDos[i].taskBox;
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";
    
    // Check if the To-Do item is completed and checked off
    newToDo.isCompleted = savedToDos[i].isCompleted ? true : false;
    
    // If completed, decorate appropriately
    if (newToDo.isCompleted) {
      newToDo.style.textDecoration = "line-through";
      newToDo.style.color = "grey";
      newToDo.classList = "checkOff";
    }
    
    // Append the newToDo to the list
    toDoList.appendChild(newToDo);
  }

  // Listen for form submission
  toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";
    let newToDo = document.createElement("li");
    newToDo.innerHTML = document.getElementById("taskBox").value;
    newToDo.isCompleted = false;

    toDoList.appendChild(newToDo);
    newToDo.appendChild(removeButton);
    toDoForm.reset();

    // Save to-do to localStorage
    savedToDos.push({ taskBox: newToDo.innerHTML, isCompleted: false });
    localStorage.setItem("toDos", JSON.stringify(savedToDos));
  });

  // Listen for click events in the list
  toDoList.addEventListener("click", function(e) {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      e.target.style.textDecoration = "line-through";
      e.target.style.color = "grey";
      e.target.classList.toggle("checkedOff");
      e.target.isCompleted = true;
    } else if (targetTagToLowerCase === "button") {
      e.target.parentNode.remove();
    }
  });

  // Get the Clear To-Do button
  const clearToDo = document.getElementById("clearToDo");

  // Listen for click on the Clear To-Do button
  clearToDo.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
  });
}); // End DOM loaded

//Once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  //Set variables for form
  //Set variables for list
    const toDoForm = document.getElementById("toDoFormCSS");
    const toDoList = document.getElementById("toDoListCSS");
  

//
// retrieve from localStorage
//
//Init variable for storage, if doesn't exist create an empty array

const savedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
//loop and create the To-Do list from storage
for (let i = 0; i < savedToDos.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerHTML = savedToDos[i].taskBox;
  let removeButton = document.createElement("button"); /////////////////////
  removeButton.innerText = "X";///////////////////////////////////
//check if the  To Do item is completed and checked off
  newToDo.isCompleted = savedToDos[i].isCompleted ? true : false; ///ERRORS
  //if so, decor
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
    newToDo.style.color = "grey";
    newToDo.classList="checkOff";
    // toDoList.appendChild(newToDo);
  }
  //append the child (makes it appear in the DOM)
  toDoList.appendChild(newToDo);
}
//
////END Retrieve
//


    //listen for Submit
    toDoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  //on SUBMIT create remove button with variable and text
      let removeButton = document.createElement("button");
      removeButton.innerText = "X";
  //create variable for new todo li
  //inner HTML is from the taskBox id form input box (valu)
      let newToDo = document.createElement("li");
      newToDo.innerHTML = document.getElementById("taskBox").value;
      newToDo.isCompleted = false; ///GREYED ERROR?


  //take variable for the list (ul) and append a child (li) [newToDo] then add remove button
      toDoList.appendChild(newToDo);
      newToDo.appendChild(removeButton);
//clear the form
      toDoForm.reset();


        // save to-do to localStorage
  savedToDos.push({ taskBox: newToDo.innerHTML, isCompleted: false });
  localStorage.setItem("toDos", JSON.stringify(savedToDos));
    });
    //END Submit
  
//////////////////////
//check if completed
////////////////////////

    //listen for a click in the DOM
    toDoList.addEventListener("click", function(e) {
      //make variable looking for the taget
      const targetTagToLowerCase = e.target.tagName.toLowerCase();
      //if target is the li element
      if (targetTagToLowerCase === "li") {
      //draw a line deciratuin on target > style > text decor
      //change to gray 
      // localStorage
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "grey";
        e.target.classList.toggle("checkedOff");
        e.target.isCompleted=true;
        // localStorage.setItem("toDos", JSON.stringify(targetTagToLowerCase));
        //if the target is the button, remove the parent (li)
      } else if (targetTagToLowerCase === "button") {
        // let todoKey = localStorage.key(e.targetTagToLowerCase);
        // localStorage.removeItem(targetTagToLowerCase);

        e.target.parentNode.remove();
        ///
        // window.localStorage.target.remove();
        // localStorage.parentNode.remove(); /////CANT REMOVE FROM LOCAL STORATE

        ///
      }




    });


//set variable for the Clear To Do button
    const clearToDo = document.getElementById("clearToDo");
//listen for click on the clearToDO  var
    clearToDo.addEventListener("click",  function() {
    //clear storage and reload
    localStorage.clear();
    location.reload();
    });

    ///////////////////////////////////////////////





  }); //END DOM loaded
  
  
//Attempt to Animate the heading (NOT WORKING) 
// const h1 = document.getElementById("h1Head")
// let wiggles = true; //wiggle not wiggles (but doesnt work)
// while (wiggle)
// {
//   setTimeout(h1.style.right="100px",1000);
//   wiggle=false;
// }
// while (!wiggle)
// {
//   setTimeout(h1.style.left="-100px",1000);
//   wiggle=true;
// }








// const todoForm = document.getElementById("newTodoForm");
// const todoList = document.getElementById("todoList");

// // retrieve from localStorage
// const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// for (let i = 0; i < savedTodos.length; i++) {
//   let newTodo = document.createElement("li");
//   newTodo.innerText = savedTodos[i].task;
//   newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
//   if (newTodo.isCompleted) {
//     newTodo.style.textDecoration = "line-through";
//   }
//   todoList.appendChild(newTodo);
// }

// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let newTodo = document.createElement("li");
//   let taskValue = document.getElementById("task").value;
//   newTodo.innerText = taskValue;
//   newTodo.isCompleted = false;
//   todoForm.reset();
//   todoList.appendChild(newTodo);

//   // save to localStorage
//   savedTodos.push({ task: newTodo.innerText, isCompleted: false });
//   localStorage.setItem("todos", JSON.stringify(savedTodos));
// });

// todoList.addEventListener("click", function(event) {
//   let clickedListItem = event.target;

//   if (!clickedListItem.isCompleted) {
//     clickedListItem.style.textDecoration = "line-through";
//     clickedListItem.isCompleted = true;
//   } else {
//     clickedListItem.style.textDecoration = "none";
//     clickedListItem.isCompleted = false;
//   }

//   // breaks for duplicates - another option is to have dynamic IDs
//   for (let i = 0; i < savedTodos.length; i++) {
//     if (savedTodos[i].task === clickedListItem.innerText) {
//       savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
//       localStorage.setItem("todos", JSON.stringify(savedTodos));
//     }
//   }
// });
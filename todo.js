//Once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  //Set variables for form
  //Set variables for list
    const toDoForm = document.getElementById("toDoForm");
    const toDoList = document.getElementById("toDoList");
  

//
// retrieve from localStorage
//
//Init variable for storage, if doesn't exist create an empty array

const savedToDos = JSON.parse(localStorage.getItem("toDos")) || [];
//loop and create the To-Do list from storage
for (let i = 0; i < savedToDos.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerHTML = savedToDos[i].taskBox;
  let removeButton = document.createElement("button"); ////
  removeButton.innerText = "X";//////////
//check if the  To Do item is completed and checked off
  newToDo.isCompleted = savedToDos[i].isCompleted ? true : false;
  //if so, decor
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
    newToDo.style.color = "grey";
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


  newToDo.isCompleted = false;


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
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "grey";
        //if the target is the button, remove the parent (li)
      } else if (targetTagToLowerCase === "button") {
        e.target.parentNode.remove();
        ///
        localStorage.parentNode.removeItem(); /////CANT REMOVE FROM LOCAL STORATE
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


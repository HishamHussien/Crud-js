//selecter
const btntodo=document.querySelector(".button-todo");
const todoinput=document.querySelector(".input-todo");
const todolist= document.querySelector(".todo-list");
// event listeners
btntodo.addEventListener("click",addtask);
const btntrash=document.querySelector(".todo-container");
//btntrash.addEventListener("click",removetodo)


//function
function addtask(e){
  e.preventDefault();
 

  
// create li 
const todoli=document.createElement("li");
todoli.classList.add("todo");
// create div 
const tododiv=document.createElement("div");
tododiv.classList.add("todo-item");

// add inpput value to div 
tododiv.innerText=todoinput.value;

// create btn complete
const completebtn=document.createElement("button");
completebtn.classList.add("btn-complete");
completebtn.innerHTML='<i class="fa-solid fa-check" ></i>';

// create btn trash 
const trashbtn=document.createElement("button");
trashbtn.classList.add("btn-trash");
trashbtn.innerHTML='<i class="fa-solid fa-trash" ></i>';

// add div + button1 + buttton2 ->li 

todoli.appendChild(tododiv);
todoli.appendChild(completebtn);
todoli.appendChild(trashbtn);

//add li to ul 

todolist.appendChild(todoli);

// remove input value 
todoinput.value="";
}
// function removetodo(e){
//   todo-container.style.display="none";
// }
function chckage(){
  if(event.keycode<48||event.keycode>57)
  {
    event.returnValue=false;
  }
  }


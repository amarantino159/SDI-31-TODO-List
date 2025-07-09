let btn= document.querySelector('#submit');
let newItem=document.querySelector('#newItem');
let list;//=document.querySelector('#list');
let archive =document.querySelector('#archive');



// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  list=document.querySelector('#list');
  list = JSON.parse(sessionStorage.getItem("autosave"));
  console.log(list);
}
else{
  list=document.querySelector('#list');
}

// sessionStorage.setItem("autosave", list);
// console.log(list);

// Listen for changes in the text field
// list.addEventListener("change", () => {
//   // And save the results into the session storage object
//   Storage.setItem("autosave", list);
// });


const pre = '<input type="checkbox">'
const post = '<button>X</button>'

function makeEl(arg){
  let todo=document.createElement("li");
  if(arg[arg.length-1] != " ") {
    arg = arg + " ";
  }
  todo.innerHTML=pre + arg + post;
  // todo.class='done';
  // console.log(todo.class)
  let btnX=todo.querySelector('button');
  btnX.addEventListener('click',()=>{
    todo.remove();
    todo.innerHTML=arg;
    archive.appendChild(todo);
    });

  let check=todo.querySelector('input');
  check.addEventListener('click',()=>{
    check.checked? todo.style.textDecoration = 'line-through':todo.style.textDecoration = 'none'
    });

  list.appendChild(todo);
  sessionStorage.setItem("autosave",JSON.stringify(list));
  console.log(sessionStorage.getItem("autosave"));
  // Storage.setItem("autosave", list);
  // sessionStorage.setItem('list',list);
  return true;

}



btn.addEventListener('click', ()=>{
  item = newItem.value
  makeEl(item);
  }

);
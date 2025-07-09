let btn= document.querySelector('#submit');
let newItem=document.querySelector('#newItem');
let list=document.querySelector('#list');
let archive =document.querySelector('#archive');

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

  return true;

}



btn.addEventListener('click', ()=>{
  item = newItem.value
  makeEl(item);
  }

);
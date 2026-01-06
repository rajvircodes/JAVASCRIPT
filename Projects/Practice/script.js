const inputEl = document.getElementById('input')
const btnEl = document.getElementById('btn')
const listEl = document.getElementById('list')


inputEl.textContent = inputEl.value;
function addTask(){

    if(inputEl.value === ""){
        alert('Enter task first')
    }else{
         const li = document.createElement('li')
    li.textContent = inputEl.value;

    console.log(inputEl.value);
    listEl.appendChild(li)
    inputEl.value = "" 
  }
    
    
}

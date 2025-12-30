// Selecting elements 
const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')


// Try to load save todos from localStorage 
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved) : [];



function saveTodos(){
    // Save task

    localStorage.setItem('todos', JSON.stringify(todos))
}

// Create a dom node for a to do object and append it to the list 
function createNode(todo,index){
    const li = document.createElement('li');

    // Check box 

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;

    checkbox.addEventListener('change',()=> {
        todo.completed = checkbox.checked;
    })
}


// Render the whole todo list from a todo array ! 
function render(){
    list.innerHTML = ''

    // Recreate each item 

    todo.array.forEach(todos,index => {
        const node = createTodoNode(todos, index)
        list.appendChild(Node)
    });
}
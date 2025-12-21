const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  addTodo(task);
  input.value = "";
});



// Create task function 

function addTodo(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button>❌</button>
  `;

  // delete logic
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  // complete logic
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("done");
    saveTodos();
  });

  list.appendChild(li);
  saveTodos();
}


function saveTodos() {
  const todos = [];
  document.querySelectorAll("li span").forEach(span => {
    todos.push({
      text: span.innerText,
      completed: span.classList.contains("done")
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const data = JSON.parse(localStorage.getItem("todos")) || [];
  data.forEach(todo => {
    addTodo(todo.text);
    if (todo.completed) {
      list.lastChild.querySelector("span").classList.add("done");
    }
  });
}

loadTodos();

var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector ('#app input')
var buttonElement = document.querySelector ('#app button')

var todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar a comunidade Rocketseat',
]
function renderTodos () {
   listElement.innerHTML = '10';
   
    for (todo of todos){
        var todoElement = document.createElement('li') ;
        var todoText = document.createTextNode (todo)
    
    todoElement.appendChild(todoText)
    listElement.appendChild(todoElement)
    }

}

renderTodos();
function addTodo()
var todoText = inputElement.value;


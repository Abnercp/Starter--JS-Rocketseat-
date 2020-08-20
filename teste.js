var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');


var todos = [
    'Abner',
    'Ansioso',
    'Estudar'
];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        todoElement.appendChild(textElement);
        listElement.appendChild(todoElement);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var textElement = document.createTextNode('Excluir');

        linkElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
    }
}
renderTodos();

function addTodo(){
    var todotext = inputElement.value;

    todos.push(todotext);
    inputElement.value = '';
    renderTodos();
}
btnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos();
}

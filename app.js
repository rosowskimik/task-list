// Document variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');


// Init event listeners
loadEventListeners();

function loadEventListeners(){
	form.addEventListener('submit', addTask);
}

function addTask(e) {
	if(taskInput.value === ''){
		alert('Add a task');
	} 

	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class="fa fa-remove"></i>';

	li.appendChild(link);


	taskList.appendChild(li);
	e.preventDefault();
}

const input = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function addTasks(e) {
	e.preventDefault();
	if (input.value) {
		let task = document.createElement('div');
		let taskTitle = document.createElement('div');
		let taskRemove = document.createElement('a');
		taskRemove.addEventListener('click', removeTask);
		taskRemove.setAttribute('href', '#');
		taskRemove.innerHTML = '&times;';
		tasksList.appendChild(task);
		task.appendChild(taskTitle);
		task.appendChild(taskRemove);
		task.classList.add('task');
		taskTitle.classList.add('task__title');
		taskTitle.textContent = input.value;
		taskRemove.classList.add('task__remove');
		input.value = '';
	}


}

function removeTask(e) {
	e.preventDefault();
	this.closest('.task').remove();
}

tasksAdd.addEventListener('click', addTasks);
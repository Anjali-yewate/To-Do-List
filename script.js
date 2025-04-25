const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);
function addTask()
{
    const taskText = taskInput.ariaValueMax.trim();
    if(taskInput)
    {
        taskInput.push({text: taskText, completed:false});
        renderTasks();
        taskInput.value = '';
    }
}
function renderTasks()
{
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');

        taskElement.classList.add('task');
        if(task.completed)
        {
            taskElement.classList.add('completed');
        }
        taskElement.innerHTML= `${task.text}
        <button class="completed-btn">complete</button>
        <button class="delete-btn">delete</button>`;

        taskElement.querySelector('.complete-btn').addEventListener('click',() =>{
            task.completed = true;
            renderTasks();
        });
        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        taskList.appendChild(taskElement);

    });
}
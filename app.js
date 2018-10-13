
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

  // Add task event
  form.addEventListener('submit', e => {
    e.preventDefault();

    if(taskInput.value === '') {
      alert('Add a task');
    } else {}

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    const delIcon = document.createElement('i');
    // Add class
    delIcon.className = 'fas fa-trash-alt';
    // Append the delIcon to link
    link.appendChild(delIcon);
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLS(taskInput.value);

    // Clear input
    form.reset();

  });

// Store Task
function storeTaskInLS(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get Tasks from LS

document.addEventListener ('DOMContentLoaded', e => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    const delIcon = document.createElement('i');
    // Add class
    delIcon.className = 'fas fa-trash-alt';
    // Append the delIcon to link
    link.appendChild(delIcon);
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

  })

});

// Remove Task

taskList.addEventListener('click', e => {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure you want to delete this item?')){
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLS(e.target.parentElement.parentElement);
    } else {}
  } else {}
  
  // Remove from LS
  function removeTaskFromLS(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
      if(taskItem.textContent === task) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

});

// Remove from LS
function removeTaskFromLS(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

};

// Clear Tasks 
clearBtn.addEventListener('click', e => {
  // While loop to continually remove each Child
  if(confirm('Clear all tasks?')){
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  } else {}

  // Clear from LS
  clearTasksFromLS();

  // Clears Task from LS
  function clearTasksFromLS() {
    localStorage.clear();
  }
});

// Filter Tasks
filter.addEventListener ('keyup', e => {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
});

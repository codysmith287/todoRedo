
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

    // Clear input
    taskInput.value = '';

  });


// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create a new list item (li)
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = deleteTask; // Add delete functionality

  // Create edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = editTask; // Add edit functionality

  // Append buttons to the task
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  
  // Add the task to the list
  todoList.appendChild(li);
  
  // Clear the input field after adding a task
  taskInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
  event.stopPropagation(); // Prevent the task from toggling completion
  const taskItem = event.target.parentElement;
  todoList.removeChild(taskItem);
}

// Function to edit a task
function editTask(event) {
  event.stopPropagation(); // Prevent any other events on the li element

  const taskItem = event.target.parentElement; // The li element
  const currentText = taskItem.firstChild.textContent; // Current task text
  
  const newText = prompt("Edit your task:", currentText); // Prompt user for new text
  
  if (newText !== null && newText.trim() !== '') {
    taskItem.firstChild.textContent = newText.trim(); // Update the text
  }
}

// Function to toggle task completion
function toggleComplete(event) {
  event.target.classList.toggle('completed');
}

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

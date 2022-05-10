const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

//Get items list by id
const taskList = document.getElementById('items');

//Create a function addTaskToList to append task to the list
const addTaskToList = (taskNumber, taskTitle) => {
  const li = document.createElement('li');
  li.className = 'list-group-item';

  const span = document.createElement('span');
  span.textContent = taskNumber;
  span.className = 'task-text';

  const input = document.createElement('input');
  input.className = 'task-input';
  input.type = 'text';

  const iconEdit = document.createElement('i');
  iconEdit.className = 'uil uil-edit icon icon-edit';
  iconEdit.addEventListener('click', (e) => {
    e.preventDefault();
    editTask(iconDelete);
  });

  const iconDelete = document.createElement('i');
  iconDelete.className = 'uil uil-trash-alt icon icon-delete';
  iconDelete.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskFromList(iconDelete);
  });

  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(iconEdit);
  li.appendChild(iconDelete);

  if (taskTitle) {
    const showItem = taskList.appendChild(li);
  }
};

const editTask = (iconEdit) => {
  const chosenTask = iconEdit.closest('sapn');
  document.getElementById('element').style.display = 'none';
  taskList.removeChild(chosenTask);
};

const deleteTaskFromList = (iconDelete) => {
  const chosenTask = iconDelete.closest('li');
  taskList.removeChild(chosenTask);
};

// Load tasks using loop and calling function addTaskToList
// for (let i = 0; i < tasks.length; i++) {
//   const task = tasks[i];
//   // addTaskToList(task);
// }

//Get submit button by id
let counter = 1;

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  let taskNumber = `Task ${counter}`;
  let taskTitle = document.getElementById('new-text-input').value;
  e.preventDefault();
  addTaskToList(taskNumber, taskTitle);
  counter++;
});
// Add event listener on submit button to add new tasks by clicking it

/*
- Add event listener to task list
- Check if icon delete or icon edit was clicked
- If icon delete clicked, remove parent element
- If icon edit clicked, hide span, show input and add span text to input
- For edit icon, add event listener to press enter key, to update and show span text and hide input
*/

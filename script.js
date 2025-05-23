function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('taskList');
  
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';
  
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.onclick = () => {
      li.classList.toggle('completed');
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✗';
    deleteBtn.onclick = () => {
      li.remove();
    };
  
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  
    taskList.appendChild(li);
    input.value = '';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('taskInput')
      .addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          addTask();
        }
      });
  });
  
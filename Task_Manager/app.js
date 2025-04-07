const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const taskList = document.getElementById("taskList");

let taskcount =0;
let completeTaskCount = 0 

addBtn.addEventListener("click" , () => {
    const val = taskInput.value;
    val.classList = 'task-text'
    if (val === "") return;

    taskcount = taskcount+1;
    const li = document.createElement("li");
    li.classList ='task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList ='complete-checkbox';

    checkbox.addEventListener('click' , () =>{
        if (checkbox.checked){
        completeTaskCount = completeTaskCount+1;
        li.classList.add('completed');
        li.classList.add('task-text');
    
        }
        else {
        completeTaskCount = completeTaskCount -1 ;
    
        }
        completedTasks.textContent =`Completed: ${completeTaskCount}`
    })
   
    const task = document.createTextNode(`   ${val}   `);
    task.classList ='task-text'
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList ="delete-button";
    deleteBtn.addEventListener('click' ,()=>{
        li.remove();
        taskcount = taskcount-1;
        totalTasks.textContent =`Total tasks: ${taskcount}`;
        emptylist();
        if (checkbox.checked){
            completeTaskCount = completeTaskCount -1 ;
            completedTasks.textContent =`Completed: ${completeTaskCount}`;
        }
        
    })

    totalTasks.textContent =`Total tasks: ${taskcount}`;

    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    emptylist();
})

function emptylist() {
    const existing = document.querySelector(".empty-list");

    if (taskcount === 0) {
        if (!existing) {
            const emptyli = document.createElement('li');
            emptyli.classList.add("empty-list");
            emptyli.textContent = "No tasks yet. Add one above!";
            taskList.appendChild(emptyli);
        }
    } else {
        if (existing) {
            existing.remove();
        }
    }
}



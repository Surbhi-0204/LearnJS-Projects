const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const taskList = document.getElementById("taskList");

let taskcount =0;
let completeTaskCount = 0 

addBtn.addEventListener("click" , () => {
    const texttask= document.createElement('span');
    const val = taskInput.value;
    texttask.textContent = val;
    texttask.className = 'task-text'
    if (val === "") return;

    taskcount = taskcount+1;
    const li = document.createElement("li");
    li.classList ='task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className ='complete-checkbox';

    checkbox.addEventListener('click' , () =>{
        if (checkbox.checked){
        completeTaskCount = completeTaskCount+1;
        li.classList.toggle('completed');
        }
        else {
        completeTaskCount = completeTaskCount -1 ;
            li.classList.toggle('completed');
        }
        completedTasks.textContent =`Completed: ${completeTaskCount}`
    })
   
    // const task = document.createTextNode(`   ${val}   `);
    // task.classList ='task-text'
    
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
    li.appendChild(texttask);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    emptylist();
    taskInput.value=null
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



import Task from './task.js'

// Create a fully functional div containing a task
export function createTaskDiv(task) {
    // task.text    task.priority   task.dueDate
    const body = document.createElement("div");
    body.id = "task-body";
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    check.className = "make-border"
    check.id = `${task.id}`
    if (localStorage.getItem(`${task}`) == "true") {
        check.classList.add("checked")
    }
    const taskText = document.createElement("p")
    taskText.className = ""
    taskText.innerText = task.text;
    taskText.className = "make-border"
    //Add duedate
    const insertDate = document.createElement("p")
    insertDate.innerText = task.dueDate
    insertDate.className = "make-border"
    //Add priority
    const prio = document.createElement("p")
    prio.innerText = task.priority
    prio.style.fontWeight = "bold"
    prio.className = "make-border"
    //Buttons!!!
    const editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "deleteBtn"
    deleteBtn.innerText = "X"
    
    // add checkbox functionality
    check.addEventListener("click", () => {
        if (taskText.classList.contains("checked")) {
            taskText.classList.remove("checked");
            localStorage.setItem(`${task}`, "false")
        }
        else {
            taskText.classList.add("checked");
            localStorage.setItem(`${task}`, "true")
        }
        
    })

    body.append(check, taskText, insertDate, prio, editBtn, deleteBtn);
    return body;
}

export function popPanel(task) {
    let body = document.createElement("li")
    body.innerText = `${task.text.substring(0, 5)}...`;
    return body;
}

// function to set up the modal with inputs
export function setUpModal() {
    let container = document.createElement("div");
    let textInput = document.createElement("input");
    textInput.id = "textInput";
    let priorityInput  = document.createElement("select");
    priorityInput.id = "priorityInput";
    let dateInput = document.createElement("input");
    dateInput.id = "dateInput"
    let btn = document.createElement("button");
    btn.id = "submitBtn";
    let priorities = ["High", "Normal", "Low"];

    textInput.setAttribute("type", "text");
    dateInput.setAttribute("type", "datetime-local");

    // Populate select element 
    for (let i in priorities) {
        let opt = document.createElement("option")
        opt.value = priorities[i];
        if (priorities[i] == "Normal") {
            opt.selected = "selected";
        }
        opt.innerText = priorities[i];
        priorityInput.appendChild(opt);
    }
    btn.innerText = "Submit";

    //Append everything
    container.append(textInput, dateInput, priorityInput, btn);

    return container;
}

export function submitTask() {
    let text = document.getElementById("textInput")
    let prio = document.getElementById("priorityInput")
    let due = document.getElementById("dateInput")

    let newTask = new Task(text.value, prio.value, due.value);
    console.log(newTask.id)
    return newTask;
}
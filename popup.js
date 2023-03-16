const addTaskBtn = document.getElementById("addTaskBtn");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
  addTask();
});

function addTask() {
  const tasksNum = tasks.length;
  tasks.push("");
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task...";
  text.addEventListener("change", () => {
    tasks[tasksNum] = text.value;
    console.log(tasks);
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "X";
  deleteBtn.addEventListener("click", () => {
    tasks.splice(tasksNum, 1);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("taskContainer");
  taskContainer.appendChild(taskRow);
}

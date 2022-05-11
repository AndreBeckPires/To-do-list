var text = document.getElementById("text");
var numberOfTasks = 0;
function createTask() {
  let tasks = document.getElementById("tasks");
  let val = document.querySelector("input").value;
  let check = document.createElement("input");
  let label = document.createElement("label");
  label.setAttribute("for", "check" + numberOfTasks);
  label.innerHTML = val;
  check.id = "check" + numberOfTasks;
  numberOfTasks += 1;
  check.type = "checkbox";
  tasks.appendChild(check);
  tasks.appendChild(label);
  document.appendChild(tasks);
}

text.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    createTask();
  }
});

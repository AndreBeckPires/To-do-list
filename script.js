var text = document.getElementById("text");
var numberOfTasks = 0;
function createTask() {
  let tasks = document.getElementById("tasks");
  let val = document.querySelector("input").value;
  let check = document.createElement("input");
  let label = document.createElement("label");
  let p = document.createElement("p");
  label.setAttribute("for", "check" + numberOfTasks);
  label.innerHTML = val;
  check.id = "check" + numberOfTasks;
  numberOfTasks += 1;
  check.type = "checkbox";
  p.appendChild(check);
  p.appendChild(label);
  tasks.appendChild(p);
}

text.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    createTask();
  }
});

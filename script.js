var text = document.getElementById("text");

function createTask() {
  let tasks = document.getElementById("tasks");
  let val = document.querySelector("input").value;
  tasks.innerHTML += "<p>" + val + "</p>";
  document.appendChild(tasks);
}

text.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    createTask();
  }
});

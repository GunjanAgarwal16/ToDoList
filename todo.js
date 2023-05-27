function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
  
    if (task !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
      li.addEventListener("click", toggleTask);
      
      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", deleteTask);
      li.appendChild(deleteButton);
  
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  
  function toggleTask() {
    this.classList.toggle("completed");
  }
  
  function deleteTask(event) {
    event.stopPropagation();
    var listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  
function AddTask() {
  let input = document.querySelector("#input");
  let addTaskBtn = document.querySelector("#addTask");
  let clutter = "";
  let taskCounter = 0;
  addTaskBtn.addEventListener("click", (e) => {
    if (input.value.trim() !== "") {
      clutter += `
            <div class="task">
            <input type="checkbox" class="checkBox">
            <div class="head">
            <p>${input.value}</p>
            </div>
            <button class="editTask"><span><i class="ri-edit-box-line"></i></span></button>
            <button class="deletTask"><span><i class="ri-delete-bin-7-line"></span></i></button>
            </div>
            `;
      taskCounter += 1;
      let remainingTask = document.querySelector(".addtask h3");
      let taskContainer = document.querySelector(".addeTaskContainer");
      taskContainer.innerHTML = clutter;
      input.value = "";
      let length = taskContainer.children.length;
      // taskCounter =length
      remainingTask.innerHTML = `Task added ${taskCounter}`;

      let editBtns = document.querySelectorAll(".editTask");
      editBtns.forEach((elem) => {
        function editVal() {
          if (input.value == "") {
            let editText = elem.previousElementSibling.childNodes[1].innerHTML;
            input.value = editText;
            elem.parentElement.remove();
            let checkBox = elem.parentElement.children[0];
            if(!checkBox.checked){
              if (taskCounter > 0) {
                taskCounter -= 1;
                remainingTask.innerHTML = `Task added ${taskCounter}`;
              }
            }
            clutter = taskContainer.innerHTML;
          }
        }
        elem.addEventListener("click", editVal);
      });

      let checkBoxes = document.querySelectorAll(".checkBox");

      checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("change", () => {
          if (checkBox.checked) {
            if (taskCounter > 0) {
              taskCounter -= 1;
              remainingTask.innerHTML = `Task added ${taskCounter}`;
            }
          } else {
            taskCounter += 1;
            remainingTask.innerHTML = `Task added ${taskCounter}`;
          }
        });
      });
      let deletBtns = document.querySelectorAll(".deletTask");
      for (let deletBtn of deletBtns) {
        function deletTask() {
          deletBtn.parentElement.remove();
          let checkBox = deletBtn.parentElement.children[0];
          if (!checkBox.checked) {
            if (taskCounter > 0) {
              taskCounter -= 1;
              remainingTask.innerHTML = `Task added ${taskCounter}`;
            }
          }

          clutter = taskContainer.innerHTML;
        }

        deletBtn.addEventListener("click", deletTask);
      }
    } else {
      alert("Please enter a task!");
    }
  });
}
AddTask();




function onCheckBoxChecked(cb){

    if(cb.checked) {
        completedTasksList.appendChild(cb.parentElement)
    } else {pendingTasksList.appendChild(cb.parentElement)
        // go back to the pending list 
    }

   
}

function removeTask(t){
    pendingTasksList.appendChild(t.parentElement)
}

addButton.addEventListener('click',function() {


let taskTextBox = document.getElementById("taskName")
let completedTasksList = document.getElementById("completedTasksList")



let titleText = taskTextBox.value

let checkBoxTask = `<li>${titleText}</li>`

let taskItem =  `
  <li>
    <input type='checkbox' onchange = 'onCheckBoxChecked(this)' />
    <label>${titleText}</label>
    <button onclick='removeTask(this)'>Remove</button>
   
    <h2>${titleText}</h2>
  </li>
                  `

pendingTasksList.innerHTML += taskItem

})

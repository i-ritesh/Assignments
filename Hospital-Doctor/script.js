let name = document.getElementById('name') 
let docID = document.getElementById('docID') 
let department = document.getElementById('dept') 
let exp = document.getElementById('exp') 
let email = document.getElementById('email') 
let mbl = document.getElementById('mbl') 
let btn = document.getElementById('btn') 
let tbody = document.querySelector('tbody') 

btn.addEventListener('click', (e) => {
  e.preventDefault() 

  if (name.value && docID.value && department.value && exp.value && email.value && mbl.value) {
    let newExp = "" 
    if (exp.value > 5) {
      newExp = "Senior" 
    } else if (exp.value > 2 && exp.value <= 5) {
      newExp = "Junior" 
    } else if (exp.value <= 1) {
      newExp = "Fresher" 
    }

    const newRow = document.createElement('tr') 
    newRow.innerHTML = `
      <td>${name.value}</td>
      <td>${docID.value}</td>
      <td>${department.value}</td>
      <td>${exp.value}</td>
      <td>${email.value}</td>
      <td>${mbl.value}</td>
      <td>${newExp}</td>
      <td style="background-color: red"><div class="removeBtn" style="cursor:pointer">Delete</div></td>
    ` 

    const removeButton = newRow.querySelector('.removeBtn') 
    removeButton.addEventListener('click', () => {
      newRow.remove() 
    }) 

    tbody.appendChild(newRow)
    name.value = ''
    docID.value = ''
    department.value = ''
    exp.value = ''
    email.value = ''
    mbl.value = ''
  }
}) 
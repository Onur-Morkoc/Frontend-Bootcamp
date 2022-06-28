import './style.css'

import data from "./data.json"

function editData(membersData) {

  let groupArr = [] // Gruplandırılmış üyelerin tutulacağı değişkendir.

  membersData.forEach(data => {

    let groupMembers = membersData.filter(member => member.group == data.group) // Aynı grupta olan kişilerin bir listesi çıkartır.
    let isMemberGroup = groupArr.find(member => member.group == data.group) // groupArr değişkeninin içinde grubun olup olmadığına bakar. 

    return isMemberGroup || groupArr.push({ group: data.group, members: groupMembers }) //Eğer grup groupArr içinde yoksa groupArr içine ekler

  });

  return groupArr //Gruplandırılmış üyeleri geriye döndürür.
}

document.querySelector('#app').innerHTML = `
<div class="col-4">
  <select id="group-select" class="form-select" width: 18rem; aria-label="Default select example">
  ${editData(data).map(member => `<option value=${member.group}>${member.group}</option>`)}
  </select>
</div>
`
let app = document.querySelector('#group-select')
app.addEventListener("change", function () {

  let { assistants } = groupAssistants(app.value)

  document.querySelector('#assistant').innerHTML = `
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${assistants[0].id}</li>
  <li class="list-group-item">Name: ${assistants[0].name}</li>
  <li class="list-group-item">Group: ${assistants[0].group}</li>
  <li class="list-group-item">Assistant: ${assistants[0].assistant?"Yes":"No"}</li>
</ul>`

});

function groupAssistants(groupName) {

  let newData = editData(data) //Gruplandırılmış üyeleri alır.
  let groupData = newData.find(member => member.group == groupName) //Gruplandırılmış üyeleri arasında groupName eşit olanı bulur.
  let assistants = groupData.members.filter(member => member.assistant == true) //groupName eşit olan verilerin arasında asistanı bulur.

  return { groupName, assistants } //groupName ile asistanları geri göndürür

}

console.log()



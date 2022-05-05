var container=document.createElement("div");
container.setAttribute('class','container');
document.body.appendChild(container);
showNotes();
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let note = document.getElementById("note").value;
  localStorage.setItem(`${title}`, note);
  store(title);
  document.getElementById("note").value = "";
  document.getElementById("title").value = ""; 
})

function showNotes() {
    note = "";
  title = "";
  console.log("im in");
  for (let key of Object.keys(localStorage)) {
    store(key);
  }
}

document.getElementById('clear').addEventListener('click',()=>
{
    localStorage.clear();
    document.location.reload(false);
})

function store(key) 
{ 
  let notes = document.createElement("div");
    notes.setAttribute("class", "notes");
    notes.setAttribute("id", `${key}`);
    console.log(notes);
    notes.innerHTML =
     `
    <div id="${key}" class="check" >
        <h1>${key}</h1>
        <h2>${localStorage[key]}</h2>
        <button id="delete" onclick="deleteCard(this)">Delete</button>
    </div>`;
    container.appendChild(notes);
}

function deleteCard(event)
{
  console.log(event.parentNode.id);
  localStorage.removeItem(event.parentNode.id);
  document.location.reload(false);
  
}
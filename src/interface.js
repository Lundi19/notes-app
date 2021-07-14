document.addEventListener("DOMContentLoaded", function() {
const noteListDiv = document.querySelector(".note-list");


  // STORE VALUE FROM ADD-NOTE //
  let submitText = document.querySelector('#add-note');
  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector("#exampleFormControlTextarea1").value;
    let notes = getDataFromStorage();
    let newNote = new Note(inputText);
    // Push newNote into notes array // 
    notes.push(newNote);
    createNote(newNote);
    // Save to storage //
    localStorage.setItem("notes", JSON.stringify(notes));
    inputText.value = "";
  })
  
  // CREATE A NEW NOTE //

  function createNote(newNote) {
    const div = document.createElement("div");
    div.classList.add("col-md-12")
    div.setAttribute("id", "note-added")
    div.setAttribute("data-id", "newNote.id")
    div.innerHTML = `
    <h3>${newNote.text}</h3>
    <p>${newNote.content}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      `;
      noteListDiv.appendChild(div);
  }

  // DISPLAY NOTES FROM LOCAL STORAGE

  function displayNotes() {
    let notes = getDataFromStorage();
    if(notes.length > 0){
      noteID = notes[notes.length - 1].id;
      noteID++
    } else {
      noteID = 1;
    }
    notes.forEach(item => {
      createNote(item);
    } )
    }

  // LOCAL STORAGE

  function getDataFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

  }
  

  // Note validation


  
  });
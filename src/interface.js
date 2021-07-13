document.addEventListener("DOMContentLoaded", function() {



  let submitText = document.querySelector('#add-note');
  
  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector("#exampleFormControlTextarea1").value;
    let newNote = createNote(inputText);
    document.querySelector('#note-list').innerText = newNote.getNote();
  })
  
  function createNote(inputText) {
    let newNote = new Note(inputText);
    return newNote;
  }
  
  
  
  
  });
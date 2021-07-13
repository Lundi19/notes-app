
document.addEventListener("DOMContentLoaded", ()=> {
  var note = new Note
  console.log(note)

  document.querySelector("#exampleFormControlTextarea1").addEventListener('submit',()=>{
    const enteredNote = document.getElementById("#exampleFormControlTextarea1").value
    event.preventDefault();

    note = new Note(enteredNote)
    note.getNote()
    console.log(note)
  })


})
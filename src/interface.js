
document.addEventListener("DOMContentLoaded", function() {
const noteListDiv = document.querySelector(".notes-list");

window.onload = displayNotes();



  // // ADDS NEW NOTE FROM USER INPUT //
  // let submitText = document.querySelector('#add-note');
  // submitText.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   let inputText = document.querySelector("#exampleFormControlTextarea1").value;
  //   let notes = getDataFromStorage();
  //   let newNote = new Note(inputText);
  //   // Push newNote into notes array // 
  //   notes.push(newNote);
  //   createNote(newNote);
  //   // Save to storage //
  //   localStorage.setItem("notes", JSON.stringify(notes));
  //   inputText.value = "";
  // })

 // ADDS NEW NOTE FROM USER INPUT //
  let submitText = document.querySelector('#add-note');
  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector("#exampleFormControlTextarea1").value;
    document.querySelector("#exampleFormControlTextarea1").value = "";
    let notes = getDataFromStorage();
    useEmoji(inputText).then((noteEmoji) => {
    let newNote = new Note(noteEmoji);
    // Push newNote into notes array // 
    notes.push(newNote);
    createNote(newNote);
    // Save to storage //
    localStorage.setItem("notes", JSON.stringify(notes));
    inputText.value = "";
    })
  })


  // CREATE A NEW NOTE //

  function createNote(newNote) {
    const div = document.createElement("div");
    div.classList.add("notes-list")
    div.setAttribute("data-id", "newNote.id")
    div.innerHTML = `
    <h3>${newNote.text.slice(0,20)}</h3></span>
    `;
      noteListDiv.appendChild(div);
  }

  // LOCAL STORAGE

  function getDataFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

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
  

  // Note validation


  // Fetch EMOJI API

  async function useEmoji(string) {
    const fetchEmoji = await fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'text': string})
      });
      let findEmoji = await fetchEmoji.json();
      let response = await findEmoji
      return response.emojified_text
  }

})
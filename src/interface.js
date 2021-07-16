
document.addEventListener("DOMContentLoaded", function() {
const noteListDiv = document.querySelector(".notes-list");

window.onload = displayNotes();


//CLEAR NOTE BUTTON

    // 1. Create the button
    var button = document.createElement("button");
    button.classList.add("button-clear");
    button.innerHTML = "<h1>Delete Notes</h1>";
  
    // 2. Append
    localStorage.clear();
    var clearButton = document.querySelector('#clear-button');
    clearButton.appendChild(button);
  
    // 3. Add event handler
    button.addEventListener ("click", function() {
    localStorage.clear(); {
    hideNote();
    }
    });

    // Hides element
  function hideNote() {
    // var el = document.getElementById('note-text'); 
    // el.setAttribute('style', 'display:none !important');
    // }

    while (noteListDiv.firstChild)
      noteListDiv.removeChild(noteListDiv.firstChild);
    }

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
    let notes = getDataFromStorage();
    const div = document.createElement("div");
    div.classList.add("notes-list")
    div.setAttribute("data-id", "newNote.id")
    div.innerHTML = `
    <h3 id="note-text"><a href="#${notes.id}">${newNote.text.slice(0,20)}</a></h3>
    <span hidden=${newNote.id}></span>
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
    })
  }

  // View the full contents of a note

  makeUrlChangeShowNoteForCurrentPage();


  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function showNote(id) {
    let notes = getDataFromStorage();
    let note = notes.find(note => note.id === id);
    document
      .getElementById("notes-list")
      .innerHTML = note;
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

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

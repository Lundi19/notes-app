'use strict';

function testNoteIsCreatedWithText() {
  let note = new Note();

  if(note.text === "test") {
    console.log("FAIL");
  } else {
    console.log("PASS");
  }
};

testNoteIsCreatedWithText();


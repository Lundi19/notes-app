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

it('stores a new note', function() {
});

it('returns a note', function() {
});

it('returns the first 20 characters of the note', function() {
});

it('has an ID', function() {
});

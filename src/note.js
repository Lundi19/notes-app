var nextID = 0;

class Note {
  constructor(text) {
    this.id = nextID++;
    this.text = text
  }

  getNote() {
    return this.text
  }

  firstTwenty() {
    return this.text.slice(0, 20)
  }

  // displayAll()
};

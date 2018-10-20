export default class NoteCollection {
  constructor(notes = {}) {
    this.notes = notes;
    this.previousNote;
  }

  getNotes () => {
    return this.notes;
  }

  addNote (note) => {
    this.notes[note.noteId] = note;
    return;
  };

  deleteNote (note) => {
    // remove note.noteId from this.notes
    return;
  }

  serializeNotes () => {
    return
  }

  setNotes (notes) => {

  }
}
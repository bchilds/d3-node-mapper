const Guid = import 'uuid/v4';

export default class Note {
  constructor(targetId, note) {
    this.noteId = Guid();
    this.targetId = targetId;
    this.note = note;
  };

  saveNote (content) => {
    this.note = content;
  };
}
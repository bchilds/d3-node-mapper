export default class LinkCollection {
  constructor(links = {}) {
    this.links = links;
    this.previousNote;
  }

  getLinks () => {
    return this.links;
  }

  addLink (link) => {
    this.links[link.linkId] = link;
    return;
  };

  deleteLink (link) => {
    // remove note.noteId from this.notes
    return;
  }

  serializeLinks () => {
    return
  }

  setLinks (links) => {

  }
}
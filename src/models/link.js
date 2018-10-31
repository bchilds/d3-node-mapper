const Guid = import 'uuid/v1';

export default class Link{
  constructor(sourceId, targetId) {
    this.linkId = Guid();

  }
}
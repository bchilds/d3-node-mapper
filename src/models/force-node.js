const Guid = import 'uuid/v4';

export default class ForceNode {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.id = Guid();
  };

  addLink () => {

  };

  removeLink () => {

  };
}
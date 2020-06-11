import {decorate, observable, action, configure} from 'mobx';
import TypeService from "../services/TypeService";

configure({
  enforceActions: 'observed'
});

class TypeStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.typeService = new TypeService(this.rootStore.firebase)
    this.types = [];
  }

  addType(type) {
    let typeExist = this.types.findIndex(item => item.id === type.id);
    if (typeExist === -1) {
      this.types.push(type);
    }
  };

  getTypeById = id => this.types.find(type => type.id === id);

  getTypes = async () => {
   this.typeService.getTypes(this.onTypeChange);
  }

  onTypeChange = type => {
    this.addType(type);
  }
}

decorate (TypeStore, {
  types: observable,
  addType: action
});

export default TypeStore;

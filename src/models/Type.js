import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Type {

  constructor({id = v4(), type, image}) {
    this.id = id;
    this.type = type;
    this.image = image;
  }
}

decorate(Type, {
});

const typeConverter = {
  toFirestore: function(type){
    return{
      type: type.type
    };
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return new Type({
      id: snapshot.id,
      type: data.type
    });
  }
};

export {typeConverter};


export default Type;

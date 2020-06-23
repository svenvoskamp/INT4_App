import {decorate, configure} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Type {

  constructor({id = v4(), type, img}) {
    this.id = id;
    this.type = type;
    this.img = img;
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
      type: data.type,
      img: data.img
    });
  }
};

export {typeConverter};


export default Type;

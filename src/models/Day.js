import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Day {

  constructor({id = v4(), day}) {
    this.id = id;
    this.day = day;
  }
}

decorate(Day, {
});

export default Day;

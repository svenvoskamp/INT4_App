import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Activity {

  constructor({id = v4(), day,  type, country, img, title, dayId, typeId, countryId}) {
    this.id = id;
    this.day = day;
    this.type = type;
    this.country = country;
    this.img = img;
    this.title = title;
    this.dayId = dayId;
    this.typeId = typeId;
    this.countryId = countryId;
  }

  linkDay(day) {
    !this.day.includes(day) && this.day.push(day);
  }
  linkType(type) {
    !this.type.includes(type) && this.type.push(type);
  }
  linkCountry(country) {
    !this.country.includes(country) && this.country.push(country);
  }
}

decorate(Activity, {
  day: observable,
  type: observable,
  country: observable,
  linkDay: action,
  linkType: action,
  linkCountry: action
});

export default Activity;

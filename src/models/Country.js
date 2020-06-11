import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Country {

  constructor({id = v4(), img, country}) {
    this.id = id;
    this.img = img;
    this.country = country;
  }
}

decorate(Country, {
});

const countryConverter = {
  toFirestore: function(country){
    return{
      country: country.country,
    };
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return new Country({
      id: snapshot.id,
      country: data.country
    });
  }
};

export {countryConverter};

export default Country;

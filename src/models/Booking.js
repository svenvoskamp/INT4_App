import {observable, action, decorate, configure} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Booking {

  constructor({id = v4(), user = [], sex1, sex2, name1, name2, type = [], country = [], count, pants, img, userId, typeId, countryId}) {
    this.id = id;
    this.user = user;
    this.sex1 = sex1;
    this.sex2 = sex2;
    this.name1 = name1;
    this.name2 = name2;
    this.type = type;
    this.country = country
    this.count = count;
    this.pants = pants;
    this.img = img;
    this.userId = userId;
    this.typeId = typeId;
    this.countryId = countryId;
  }

  linkUser(user) {
    !this.user.includes(user) && this.user.push(user);
  }
  linkType(type) {
    !this.type.includes(type) && this.type.push(type);
  }
  linkCountry(country) {
    !this.country.includes(country) && this.country.push(country);
  }
}

decorate(Booking, {
  user: observable,
  type: observable,
  country: observable,
  linkUser: action,
  linkType: action,
  linkCountry: action
});

const bookingConverter = {
  toFirestore: function(booking) {
    return {
      sex1: booking.sex1,
      sex2: booking.sex2,
      name1: booking.name1,
      name2: booking.name2,
      count: booking.count,
      pants: booking.pants,
      userId: booking.userId,
      typeId: booking.typeId,
      countryId: booking.countryId,
      img: booking.img
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new Booking({
      id: snapshot.id,
      sex1: data.sex1,
      sex2: data.sex2,
      name1: data.name1,
      name2: data.name2,
      count: data.count,
      pants: data.pants,
      userId: data.userId,
      typeId: data.typeId,
      countryId: data.countryId,
      img: data.img
    });
  }
};

export {bookingConverter};

export default Booking;

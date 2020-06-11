import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class User {

  constructor({id = v4(), bookings = [], userData = [], name, email, bookingId}) {
    this.id = id;
    this.bookings = bookings;
    this.userData = userData;
    this.name = name;
    this.email = email;
    this.bookingId = bookingId;
  }

  linkBooking(booking) {
   !this.bookings.includes(booking) && this.bookings.push(booking);
  }

  linkUserData(userData) {
    !this.userData.includes(userData) && this.userData.push(userData);
   }
}

decorate(User, {
  bookings: observable,
  userData: observable,
  linkBooking: action
});

const userConverter = {
  toFirestore: function(user) {
    return {
      userId: user.id,
      name: user.name,
      email: user.email
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new User({
      name: data.name,
      email: data.email,
      id: data.userId
    });
  }
};

export {userConverter};

export default User;

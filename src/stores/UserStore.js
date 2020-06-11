import {decorate, observable, action, configure} from 'mobx';
import UserService from "../services/UserService";


configure({
  enforceActions: 'observed'
});

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.users = [];
  }

  addUser(user) {
      this.users.push(user);
    }

  getUserById = id => this.users.find(user => user.id === id);

  getBookingForUserById = (user, bookingId) => {
    const newUser = this.getUserById(user.id);
    const result = newUser.bookings.find(booking => booking.id === bookingId);
    return result;
  }
  empty() {
    this.users = [];
  }

  createUser = async user => {
     await this.userService.create(user);
     const result = this.getUserById(user.id);
     if(result == undefined){
       this.addUser(user);
     }
     this.rootStore.uiStore.setCurrentUser(user);
  }

  createUserData = async (user, userData, email) => {
    await this.userService.createUserData(userData, email);
    const updatedUser = this.rootStore.userStore.getUserById(user.id);
    updatedUser.linkUserData(userData);
    return userData;
  }



}

decorate (UserStore, {
  users: observable,
  addUser: action,
  empty: action
});

export default UserStore;

import {decorate, observable, action, configure} from 'mobx';
import Booking from '../models/Booking';
import BookingService from "../services/BookingService";

configure({
  enforceActions: 'observed'
});

class BookingStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.bookingService = new BookingService(this.rootStore.firebase);
    this.bookings = [];
  }

  addBooking(booking) {
    this.bookings.push(booking);
  }

  getBookingById = id => this.bookings.find(booking => booking.id === id);

  empty() {
    this.bookings = [];
  }

  getBookings = async () => {
    this.bookingService.getBookings(this.onBookingChange);
  }

  onBookingChange = booking => {
    const result = this.getBookingById(booking.id);
    if(result == undefined){
    this.addBooking(booking);
    }
    const user = this.rootStore.userStore.getUserById(booking.userId);
    const type = this.rootStore.typeStore.getTypeById(booking.typeId);
    const country = this.rootStore.countryStore.getCountryById(booking.countryId);
    if(user){
    const bookingResult = this.rootStore.userStore.getBookingForUserById(user, booking.id)
    this.rootStore.uiStore.setCurrentBooking(booking);
    if(bookingResult == undefined){
    user.linkBooking(booking);
    booking.linkUser(user);
    booking.linkType(type);
    booking.linkCountry(country);
    }
  }
}

  createBooking = async booking => {
    await this.bookingService.createBooking(booking);
    return booking;
  }

  createBookingForUser = async booking => {
    await this.bookingService.createBookingForUser(booking, this.rootStore.uiStore.currentUser.email);
    return booking;
  }
}

decorate (BookingStore, {
  bookings: observable,
  addBooking: action,
  empty: action
});

export default BookingStore;

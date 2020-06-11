
import "firebase/firestore";
import {bookingConverter} from "../models/Booking";



class BookingService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  createBooking = async booking => {
    const bookingRef = await this.db.collection("bookings").doc();
    await bookingRef.withConverter(bookingConverter).set(booking);
    return bookingRef;
  };

  getBookings = async onChange => {
    await this.db
    .collection('bookings')
    .withConverter(bookingConverter)
    .onSnapshot(async snapshot => {
      snapshot.docChanges().forEach(async change => {
        if(change.type === "added") {
          const bookingObj = change.doc.data();
          onChange(bookingObj);
        }
      })
    })
  }

  createBookingForUser = async (booking, email) => {
    return await this.db
    .collection("users")
    .doc(email)
    .collection("bookings")
    .doc()
    .withConverter(bookingConverter)
    .set(booking);
  }
}
export default BookingService;

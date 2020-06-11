import Couple from "./User";
import Booking from "./Booking";
import RootStore from "../stores/index";

test("Create a couple", () => {
  const rootStore = new RootStore();
  const booking = new Booking({});
  const couple = new Couple({booking: booking, sex_1: "Male", sex_2: "Female", name_1: "Alex", name_2: "Celine", bookingId: booking.id});
  expect(couple.sex_1).toBe("Male");
  expect(couple.sex_2).toBe("Female");
  expect(couple.name_1).toBe("Alex");
  expect(couple.name_2).toBe("Celine");
  expect(couple.bookingId).toBe(booking.id);
});

test("Link a booking to a couple", () => {
  const rootStore = new RootStore();
  const booking = new Booking({countryId: "2"});
  const couple = new Couple({booking: booking, sex_1: "Male", sex_2: "Female", name_1: "Alex", name_2: "Celine"});
  expect(couple.booking.countryId).toBe("2");
});

import Couple from "./User";
import Booking from "./Booking";
import Type from "./Type";
import Country from "./Country";
import RootStore from "../stores/index";

test("Create a Booking", () => {
  const booking = new Booking({couple: {}, type: {}, country: {}, marriageYear: 1990, marriageCount: 30, pants: 1, img: "selfie.jpg", });
  expect(booking.marriageYear).toBe(1990);
  expect(booking.marriageCount).toBe(30);
  expect(booking.pants).toBe(1);
  expect(booking.img).toBe("selfie.jpg");
  expect(booking.couple).toBeInstanceOf(Object);
  expect(booking.type).toBeInstanceOf(Object);
  expect(booking.country).toBeInstanceOf(Object);
});

test("Booking has a couple", () => {

  const couple = new Couple({sex_1: "Male", sex_2: "Female", name_1: "Alex", name_2: "Celine"});
  const booking = new Booking({couple: couple, type: {}, country: {}, marriageYear: 1990, marriageCount: 30, pants: 1, img: "selfie.jpg", });
  expect(booking.couple.sex_1).toBe("Male");
});


test("Booking has a type", () => {
  const rootStore = new RootStore();
  const type = new Type({type: "Avontuur"});
  const couple = new Couple({sex_1: "Male", sex_2: "Female", name_1: "Alex", name_2: "Celine"});
  const booking = new Booking({couple: couple, type: type, country: {}, marriageYear: 1990, marriageCount: 30, pants: 1, img: "selfie.jpg", });
  expect(booking.type.type).toBe("Avontuur");
});

test("Booking has a country", () => {
  const rootStore = new RootStore();
  const country = new Country({country: "China"});
  const type = new Type({type: "Avontuur"});
  const couple = new Couple({sex_1: "Male", sex_2: "Female", name_1: "Alex", name_2: "Celine"});
  const booking = new Booking({couple: couple, type: type, country: country, marriageYear: 1990, marriageCount: 30, pants: 1, img: "selfie.jpg", });
  expect(booking.country.country).toBe("China");
});

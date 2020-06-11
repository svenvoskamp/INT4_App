import Type from "./Type";
import Day from "./Day";
import Country from "./Country";
import Activity from "./Activitiy";


test("Create an Activity", () => {
  const activity = new Activity({day: {}, type: {}, country: {}, img: "selfie.png", title: "Massage"});
  expect(activity.title).toBe("Massage");
  expect(activity.img).toBe("selfie.png");
  expect(activity.day).toBeInstanceOf(Object);
  expect(activity.type).toBeInstanceOf(Object);
  expect(activity.country).toBeInstanceOf(Object);
});

test("Activity has a day", () => {
  const day = new Day({day: 1})
  const activity = new Activity({day: day, type: {}, country: {}, img: "selfie.png", title: "Massage"});
  expect(activity.day.day).toBe(1);
});


test("Activity has a type", () => {
  const type = new Type({type: "Avontuur"})
  const day = new Day({day: 1})
  const activity = new Activity({day: day, type: type, country: {}, img: "selfie.png", title: "Massage"});
  expect(activity.day.day).toBe(1);
  expect(activity.type.type).toBe("Avontuur");
});

test("Activity has a country", () => {
  const country = new Country({country: "China"});
  const type = new Type({type: "Avontuur"})
  const day = new Day({day: 1})
  const activity = new Activity({day: day, type: type, country: country, img: "selfie.png", title: "Massage"});
  expect(activity.day.day).toBe(1);
  expect(activity.type.type).toBe("Avontuur");
  expect(activity.country.country).toBe("China");
});

import Day from "./Day";

test("Create a day", () => {
  const day = new Day({day: "1" });
  expect(day.day).toBe("1");
});

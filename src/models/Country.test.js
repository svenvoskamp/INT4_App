import Country from "./Country";

test("Create a country", () => {
  const country = new Country({img: "italie.png", country: "italie" });
  expect(country.img).toBe("italie.png");
  expect(country.country).toBe("italie");
});

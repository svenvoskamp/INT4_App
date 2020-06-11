import Type from "./Type";

test("Create a type", () => {
  const type = new Type({type: "avontuur", img: "avontuur.png" });
  expect(type.type).toBe("avontuur");
  expect(type.img).toBe("avontuur.png");
});

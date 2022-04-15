import Age from "../src/js/age";

describe("age", () => {
  test("It should return an object with the given age as a property", () => {
    let age = new Age(30);
    expect(age.years).toEqual(30);
  });
});
import Age from "../src/js/age";

describe("age", () => {
  let age;

  beforeEach(() => {
    age = new Age(30);
  });
  test("It should return an object with the given age as a property", () => {
    expect(age.years).toEqual(30);
  });

  test("It should return the age converted into Mercury years", () => {
    expect(age.mercury()).toEqual(125);
  });
});

/*
  test("", () => {
    
  });
*/
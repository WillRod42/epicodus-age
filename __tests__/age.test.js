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

  test("It should return the age converted into Venus years", () => {
    expect(age.venus()).toEqual(48);
  });

  test("It should return the age converted into Mars years", () => {
    expect(age.mars()).toEqual(16);
  });

  test("It should return the age converted into Jupiter years", () => {
    expect(age.jupiter()).toEqual(3);
  });

  test("It should return an object with each life expectancy of each planet using the given life expectancy for Earth years", () => {
    expect(age.averageLifeExpectancy(80)).toEqual({"mercury": 208, "venus": 81, "mars": 27, "jupiter": 4});
  });
});

/*
  test("", () => {
    
  });
*/
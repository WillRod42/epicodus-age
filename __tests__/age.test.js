import Age from "../src/js/age";

describe("age", () => {
  let age;

  beforeEach(() => {
    age = new Age(30, false);
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

  test("If they are older than their life expectancy, this should return the number of years they have lived past it", () => {
    age = new Age(100, false);
    expect(age.averageLifeExpectancy(80)).toEqual({"mercury": 83, "venus": 32, "mars": 11, "jupiter": 2});
  });

  test("If dogYears is true it should perform all calculations in dog years instead of human years", () => {
    age = new Age(30, true);
    expect(age.years).toEqual(210);
    expect(age.mercury()).toEqual(875);
    expect(age.venus()).toEqual(339);
    expect(age.mars()).toEqual(112);
    expect(age.jupiter()).toEqual(18);
    expect(age.averageLifeExpectancy(80)).toEqual({"mercury": 1458, "venus": 565, "mars": 186, "jupiter": 30});

    age = new Age(100, true);
    expect(age.averageLifeExpectancy(80)).toEqual({"mercury": 583, "venus": 226, "mars": 74, "jupiter": 12});
  });
});
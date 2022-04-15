export default class Age {
  constructor(age) {
    this.years = age;
  }

  mercury() {
    return parseInt((this.years / 0.24).toFixed(0));
  }

  venus() {
    return parseInt((this.years / 0.62).toFixed(0));
  }

  mars() {
    return parseInt((this.years / 1.88).toFixed(0));
  }

  jupiter() {
    return parseInt((this.years / 11.86).toFixed(0));
  }

  averageLifeExpectancy(lifeExpectancy) {
    let mercuryLife = Math.abs((new Age(lifeExpectancy - this.years)).mercury());
    let venusLife = Math.abs((new Age(lifeExpectancy - this.years)).venus());
    let marsLife = Math.abs((new Age(lifeExpectancy - this.years)).mars());
    let jupiterLife = Math.abs((new Age(lifeExpectancy - this.years)).jupiter());

    return {"mercury": mercuryLife, "venus": venusLife, "mars": marsLife, "jupiter": jupiterLife};
  }
}
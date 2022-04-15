export default class Age {
  constructor(age, dogYears) {
    if (dogYears) {
      this.years = age * 7;
    } else {
      this.years = age;
    }
    this.dogYears = dogYears;
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
    let age = this.years;
    if (this.dogYears) {
      age /= 7;
    }

    let mercuryLife = Math.abs((new Age((lifeExpectancy - age), this.dogYears)).mercury());
    let venusLife = Math.abs((new Age((lifeExpectancy - age), this.dogYears)).venus());
    let marsLife = Math.abs((new Age((lifeExpectancy - age), this.dogYears)).mars());
    let jupiterLife = Math.abs((new Age((lifeExpectancy - age), this.dogYears)).jupiter());

    return {"mercury": mercuryLife, "venus": venusLife, "mars": marsLife, "jupiter": jupiterLife};
  }
}
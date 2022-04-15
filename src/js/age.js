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
}
export default class Age {
  constructor(age) {
    this.years = age;
  }

  mercury() {
    return parseInt((this.years * 0.24).toFixed(0));
  }
}
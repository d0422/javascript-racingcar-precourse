export default class Car {
  constructor(name) {
    this.name = name;
    this.state = 0;
    this.result = "";
  }
  getName() {
    return this.name;
  }
  getResult() {
    return this.result;
  }
  start() {
    const randomNumber = this.getRandomNumber();
    this.state = this.getState(this.state, randomNumber);
    this.changeResult();
  }
  getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
  getState(state, randomNumber) {
    if (randomNumber >= 4) {
      state = state + 1;
    }
    return state;
  }
  changeResult() {
    let x = 0;
    this.result = "";
    for (x = 0; x < this.state; x++) {
      this.result = this.result + "-";
    }
  }
}

export default class Car {
  constructor(name) {
    this.name = name;
    this.state = 0;
    this.result = "";
  }
  start() {
    const randomNumber = getRandomNumber();
    this.state = getState(this.state, randomNumber);
    displayState();
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
}

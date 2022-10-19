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
}

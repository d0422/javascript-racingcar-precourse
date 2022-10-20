import Car from "./Car.js";

export default class RacingCar {
  constructor() {
    this.carLists = [];
    this.carlistInput = document.querySelector("#car-names-input");
    this.carlistSubmit = document.querySelector("#car-names-submit");
    this.tryInput = document.querySelector("#racing-count-input");
    this.trySubmit = document.querySelector("#racing-count-submit");
    this.hideTry();
    this.carlistSubmit.addEventListener("click", () => {
      event.preventDefault();
      this.getCarList(this.carlistInput.value);
    });
    this.trySubmit.addEventListener("click", () => {
      event.preventDefault();
      this.checkTryValue(this.tryInput.value);
    });
  }
  getCarList(carString) {
    this.checkInputValue(carString);
    this.showTry();
  }
  checkInputValue(carString) {
    if (carString === "") {
      this.showError();
      return;
    }
    const carList = carString.split(",");
    carList.forEach((car) => {
      if (car.length > 5) {
        this.showError();
        return;
      }
      this.carLists.push(new Car(car));
    });
  }
  showError() {
    alert("입력오류입니다! 다시 입력해주세요!");
    this.carlistInput.value = "";
    this.tryInput.value = "";
    this.carLists = [];
  }
  showTry() {
    this.tryInput.style.visibility = "visible";
    this.trySubmit.style.visibility = "visible";
  }
  hideTry() {
    this.tryInput.style.visibility = "hidden";
    this.trySubmit.style.visibility = "hidden";
  }
  getTryNum(tryNumber) {
    this.checkTryValue();
  }
  checkTryValue(tryNumber) {
    if (tryNumber < 1) {
      this.showError();
      this.hideTry();
    } else {
      this.startRace(tryNumber);
    }
  }
  startRace(tryNumber) {
    const divArray = [];
    for (let x = 0; x < tryNumber; x++) {
      divArray.push(this.getCarsHTML());
    }
    this.displayResult(divArray);
    const winner = this.getWinner();
    this.displayWinner(winner);
  }
  getCarsHTML() {
    const ResultDiv = document.createElement("div");
    this.carLists.forEach((car) => {
      car.start();
      const div = this.makeHTML(car);
      ResultDiv.appendChild(div);
    });
    ResultDiv.appendChild(document.createElement("br"));
    return ResultDiv;
  }
  makeHTML(car) {
    const ResultHTML = document.createElement("div");
    ResultHTML.innerHTML = `${car.getName()}: ${car.getResult()}`;
    return ResultHTML;
  }
  displayResult(divArray) {
    const result = document.querySelector("#result");
    const container = document.createElement("div");
    container.appendChild(document.createElement("br"));
    divArray.forEach((div) => {
      container.appendChild(div);
    });
    result.after(container);
  }
  getWinner() {
    let max = 0;
    let result = [];
    this.carLists.forEach((car) => {
      if (max < car.state) {
        result = [];
        max = car.state;
        result.push(car.name);
      } else if (max === car.state) {
        result.push(car.name);
      }
    });
    return result;
  }
  displayWinner(winnersArray) {
    const winner = document.querySelector("#racing-winners");
    let winnerString = "";
    for (let x = 0; x < winnersArray.length; x++) {
      if (x == winnersArray.length - 1) {
        winnerString = winnerString + winnersArray[x];
      } else {
        winnerString = winnerString + winnersArray[x] + ", ";
      }
    }
    winner.innerHTML = winnerString;
  }
}

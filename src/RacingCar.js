import Car from "./Car.js";

export default class RacingCar {
  constructor() {
    this.carLists = [];
    this.carlistInput = document.querySelector("#car-names-input");
    this.carlistSubmit = document.querySelector("#car-names-submit");
    this.tryInput = document.querySelector("#racing-count-input");
    this.trySubmit = document.querySelector("#racing-count-submit");
    this.winner = document.getElementById("racing-winners");
    this.tryInput.style.visibility = "hidden";
    this.trySubmit.style.visibility = "hidden";
    this.carlistSubmit.addEventListener("click", () => {
      event.preventDefault();
      this.getCarList(this.carlistInput.value);
    });
    this.trySubmit.addEventListener("click", () => {
      event.preventDefault();
      console.log(this.tryInput.value);
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
}

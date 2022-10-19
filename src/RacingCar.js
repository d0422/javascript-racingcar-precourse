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
      console.log(this.carlistInput.value);
    });
    this.trySubmit.addEventListener("click", () => {
      event.preventDefault();
      console.log(this.tryInput.value);
    });
  }
}

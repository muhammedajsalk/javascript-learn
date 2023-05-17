  class Car {
  constructor(mileage, length, boot_space) {
    this.mileage = mileage;
    this.length = length;
    this.boot_space = boot_space;
  }

  details() {
    document.body.innerHTML += `<p>Mileage: ${this.mileage}</p>`;
    document.body.innerHTML += `<p>Length: ${this.length}</p>`;
    document.body.innerHTML += `<p>Boot Space: ${this.boot_space}</p>`;
  }
}

const car = new Car(20, 4.5, 200);
car.details();

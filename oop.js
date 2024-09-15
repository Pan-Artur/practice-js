// console.dir(Object)
// console.dir(Array)
// console.dir(Number)

const user = {
  name: "Artem",
  age: 16,
  address: {
    region: "Kyiv",
    city: "Kyiv",
  },
  showAge() {
    console.log(this.age);
  },
};

const userCopy = Object.create(user);
userCopy.hobby = "music";

console.dir(userCopy);
console.log(userCopy.age);
console.log(userCopy);
userCopy.showAge();

const userCopyCopy = Object.create(userCopy);
userCopyCopy.message = "це копія копії об'єкта";
console.log(userCopyCopy);

// алгоритм пошуку властивостей (прототипів):
// 1 крок - пошук починається у власних властивостей,
// 2 крок - якщо властивості немає серед власних ключів, то пошук переходить до ланцюжка прототипів
// 3 крок - пошук властивості припиняється при 1 співпадінні з ключем у ланцюжку прототипів
// 4 крок - вертається значення знайденої властивості.
// console.dir(Object)
// console.dir(Array)
// console.dir(Number)

// const user = {
//   name: "Artem",
//   age: 16,
//   address: {
//     region: "Kyiv",
//     city: "Kyiv",
//   },
//   showAge() {
//     console.log(this.age);
//   },
// };

// const userCopy = Object.create(user);
// userCopy.hobby = "music";

// console.dir(userCopy);
// console.log(userCopy.age);
// console.log(userCopy);
// userCopy.showAge();

// const userCopyCopy = Object.create(userCopy);
// userCopyCopy.message = "це копія копії об'єкта";
// console.log(userCopyCopy);

// const Car = function (brand, price) {
//   this.brand = brand;
//   this.price = price;

//   this.engine = function () {
//     console.log(`Увімкнули мотор в ${this.brand}`);
//   };
// };

// const bmw = new Car("BMW", 30000);
// console.log(bmw);

// const audi = new Car("Audi", 24000);
// console.log(audi);

// bmw.engine();
// audi.engine();

const Car = function ({ brand, price }) {
  this.brand = brand;
  this.price = price;

  this.engine = function () {
    console.log(`Увімкнули мотор в ${this.brand}`);
  };
};

const bmw = new Car({
  brand: "BMW",
  price: 30000,
});

console.log(bmw);

const audi = new Car({
  brand: "Audi",
  price: 24000,
});
console.log(audi);

bmw.engine();
audi.engine();

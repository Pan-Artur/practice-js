// const friends = ["friend1", "friend2", "friend3"];

// console.log(friends);

// console.log(...friends);

// const copyFriends = [...friends];

// console.log(copyFriends);

// copyFriends.push("friend4");

// console.log([...copyFriends]);

// const products = [
//   {
//     productName: "Ананас",
//     price: 120,
//   },

//   {
//     productName: "Авокадо",
//     price: 60,
//   },
// ];

// const copyProducts = [...products];

// console.log(copyProducts);

// const fruits = ["Яблуко", "Груша", "Апельсин"];

// function showProducts(apple, pear, orange) {
//     return `В корзині лежать такі фрукти: ${apple}, ${pear}, ${orange}`;
// }

// console.log(showProducts(...fruits));

// //console.log(showProducts("яблуко", "груша", "апельсин"));

// const product = {
//     productName: "Ананас",
//     price: 120,
// }

// const copyProduct = { ...product };
// console.log(copyProduct);

// // const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// // // Вертикальний запис зручніше для читання

// // const updatedHouses [
// //     houses.slice(0, 1),

// //         'Frey of the Crossing',

// //     houses.slice(2),
// // ];
// // console.log(updatedHouses);

// const hotel = {
//   name: "Abracadabra",
//   stars: 5,
// };

// const copyHotel = {
//   ...hotel
// };

// console.log(hotel === copyHotel);

// const city1 = {
//   cityName: "Kyiv",
//   people: 50000,
// };

// const language = {
//   languageType: "Ukrainian",
//   sound: "cute",
//   cityName: "Vinnytsia",
// };

// const region = {
//   ...city1,
//   ...language,
// };

// // const region = {
// //   //cityName: "Kyiv",
// //   people: 50000,
// //   languageType: "Ukrainian",
// //   sound: "cute",
// //   cityName: "Vinnytsia",
// // };

// console.log(region);

// const object1 = {
//   x: 5,
//   y: 3,
//   z: 2,
// };

// const object2 = {
//   x: 3,
//   a: 7,
//   b: 9,
// }

// const object3 = {
//   z: 4,
//   a: 7,
//   b: 3,
//   x: 6,
// }

// // const object = {
// //   ...object1,
// //   ...object2,
// // }

// // const object = {
// //   //x: 5,
// //   y: 3,
// //   z: 2,
// //   x: 3,
// //   a: 7,
// //   b: 9,
// // };

// const object = {
//   ...object1,
//   ...object2,
//   ...object3,
// };

// const object = {
//   // x: 5,
//   y: 3,
//   // z: 2,
//   // x: 3,
//   // a: 7,
//   // b: 9,
//   z: 4,
//   a: 7,
//   b: 3,
//   x: 6,
// };

// console.log(object);

// const array1 = [1, 2, 3, 4, 5];

// const array2 = [6, 7, 8, 9, 10];

// const array = [...array1, ...array2];

// console.log(array);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const copyNumbers = [...numbers];

// const copyNumbers = [...[1, 2, 3, 4, 5, 6, 7]];
// const newNumbers = [11, 12, 13, 14, ...numbers];

// console.log(newNumbers);

// console.log(...[25, 26, ...[12, 14, ...[77, 78]]]);

// const user = {
//   name: "Andrey",
//   city: "Lviv",
//   address: {
//     street: "Soborna",
//     numberOfHome: 45,
//   },
//   friends: ["Artem", "Artur", "Dima"],
// };

// console.log(user.address.street);

// const userName = user.name;

// const userCity = user.city;

// const userAddress = user.address.street;

// const userAddressNumberOfHome = user.address.numberOfHome;

// const { name, city } = user;

// console.log(name, city);

// const { street, numberOfHome } = user.address;

//Скоротимо і деструктуризуємо

// const { name, city, address: {street, numberOfHome}, friends} = user;

// console.log(street, numberOfHome, friends);

// const playlist = {
//   name: "My favourite songs",
//   songsQuantity: 5,
//   traks: ["A", "B", "C", "D", "E"],
//   poster: "Rock-n-Roll",
//   author: {
//     name: "Volodimir",
//     subscribers: 12000,
//     country: "Ukraine",
//   },
// };

// playlist.author.subscribers

// const {
//   name: playlistName,
//   traks,
//   author: { subscribers, country, name },
//   poster = "No poster",
// } = playlist;

//////////////////////////////////

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilockBrakes: true,
//     stabilityControl: true,
//   },
// };

// const {
//   make,
//   model,
//   year,
//   features: [firstImprove, secondImprove, thirdImprove],
//   safety: {airbags, antilockBrakes, stabilityControl},
// } = car;

// console.log(make, model, year);
// console.log(firstImprove, secondImprove, thirdImprove);
// console.log(airbags, antilockBrakes, stabilityControl);

/////////////////////////////////////

// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const { title, director: { name, nationality }, actors: [firstActor, secondActor], release_year, ratings: { imdb, rotten_tomatoes } } = movie;

//////////////////////////////////////

//Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

// const person = {
//   name: 'Nelli',
//   surname: 'Laroy',
//   age: 25
// };

// personInfo = (person) => {
//   const { name, surname, age } = person;
// }

// console.log(personInfo(person));

///////////////////////////////////////

const student = {
  name: "Bruce",
  surname: "Lee",
  grades: [4, 5, 3],
};

const calculateAverageGrade = (object) => {
  const { name, surname, grades } = object;
  let result = 0;
  for (let i = 0; i < grades.length; i++) {
    result += grades[i];
  }
  result = result / grades.length;
  return result;
  // console.log(grades)
};

console.log(calculateAverageGrade(student));

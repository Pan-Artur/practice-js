// // const product = {
// //     productName: "Salad",
// //     productPrice: 50,
// //     productWeight: 0.5,
// // }

// // // console.log(product.productPrice);

// // const price = product.productPrice;

// // console.log(price);

// // console.log(product.productName);

// // console.log(product["productWeight"]);

// // product.productCountry = "Ukraine";

// // console.log(product.productCountry);

// // product["productAdress"] = "Kyiv";

// // console.log(product);

// // product.ingredients = ["tomato", "cucumber", "carrot", "potato", "olive oil"];

// // console.log(product);

// // delete product.productWeight;

// // console.log(product);

// // product.productPrice = 100;

// // console.log(product);

// //////////////////////////////////////////////////

// // КОРОТКИЙ ЗАПИС ВЛАСТИВОСТЕЙ

// // const userName = "Макс";

// // // const user = {
// // // name: userName,
// // // email: "test@gmail.com"
// // // };

// // // Але якщо назва ключа така сама, як назва змінної із значенням
// // // const user = {
// // // userName: userName,
// // // email: "test@gmail.com",
// // // };

// // // Можемо скоротити
// // const user = {
// // userName,
// // email: "test@gmail.com",
// // };

// // // Вичісляючі властивості
// // const boxWidth = "width";
// // const boxHeight = "height";

// // // const boxContainer = {
// // // width: "1200px",
// // // height: "500px",
// // // marginLeft: "auto",
// // // marginRight: "auto"
// // // };

// // // Підставимо змінні

// // // const boxContainer = {
// // // [boxWidth]: "1200px",
// // // [boxHeight]: "500px",
// // // marginLeft: "auto",
// // // marginRight: "auto",
// // // };

// // // Зробимо змінними, ще значення

// // const widthContainer = "1200px";

// // const boxContainer = {
// // [boxWidth]: widthContainer,
// // [boxHeight]: "500px",
// // marginLeft: "auto",
// // marginRight: "auto",
// // };

// // ///////////////////////////////////////

// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],
// // };

// // apartment.owner = {
// //   name: "Henry",
// //   phone: "982-126-1588",
// //   email: "henry.carter@aptmail.com",
// // };

// // const aptRating = apartment["rating"];

// // const aptDescr = apartment["descr"];

// // const aptPrice = apartment["price"];

// // const aptTags = apartment["tags"];

// // const ownerName = apartment.owner.ownerName;

// // const ownerPhone = apartment.owner.phone;

// // const ownerEmail = apartment.owner.email;

// // const firstTag = apartment.tags[0];

// // const numberOfTags = apartment.tags.length;

// // const lastTag = apartment.tags[numberOfTags - 1];

// const user = {
//   name: "Bogdan",
//   age: 13,
//   pasword: "IDDQD1dkfa",
//   friends: ["Artem", "Vika", "Artur", "Dima"],
//   location: {
//     country: "Ukraine",
//     city: "Kyiv",
//     street: "Ushakova",
//     houseNumber: 16,
//   },
//   showName() {
//     alert(this.name);
//   },
//   countFriends() {
//     alert(`В Богдана ${this.friends.length} друзів`);
//   },
//   addFriend(friendName) {
//     this.friends.push(friendName);
//   },
//   changeCity() {
//     const newCity = prompt("Яке в Богдана нове місто проживання?");
//     this.city = newCity;
//     alert(`Нове місто Богдана це ${this.city}!`);
//   },
// };
// // user.showName();
// // user.countFriends();
// // user.addFriend('Maxim');
// // console.log(user.friends);
// // user.countFriends();
// user.changeCity();

// // Працюємо з колекцією товарів в кошику:
// // Написати методи вказані нижче в коді
// // { name: '🍎', price: 50 }
// // { name: '🍇', price: 70 }
// // { name: '🍋', price: 60 }
// // { name: '🍓', price: 110 }

// // const cart = {
// // items: [],
// // getItems() {},
// // add(product) {},
// // remove(productName) {},
// // clear() {},
// // countTotalPrice() {},
// // increaseQuantity(productName) {},
// // decreaseQuantity(productName) {},
// // };

// const basketofGoods = {
//   items: [
//     {name: '🍎', price: 50},
//     {name: '🍇', price: 70},
//     {name: '🍋', price: 60},
//     {name: '🍓', price: 110},
//   ],
//   getItems() {
//     const products = [];
//     for (let item of this.items) {
//       products.push(item.name);
//     }

//     const result = products.join(", ");
//     return result;
//   },
// }

// console.log(result.getItems());

const user = {
  name: "Artur",
  email: "artur@gmail.com",
  password: "1234",
  address: "Soborna 6",
}

console.log(user["email"]);

let userInfo = `Ми знаємо про користувача, такі дані: `;

for (const key in user) {
  userInfo += " " + key;
  console.log(userInfo + " " + key);
}

const userInfoArray= Object.keys(user);
console.log(userInfoArray);

const stringUserInfo = userInfoArray.join(", ");
console.log(userInfo + stringUserInfo);

let userValue = "Ми знаємо прокористувача, такі значення:"

for (const key in user) {
  userValue += " " + user[key];
  console.log(userValue);
}

const testEntries = Object.entries(user);
console.log(testEntries);

// Дано масив об’єктів
// const friends = [
// { name: 'Mango', online: false },
// { name: 'Kiwi', online: true },
// { name: 'Poly', online: false },
// { name: 'Ajax', online: false },
// ];

// Написати функцію яка буде отримувати масив та ім’я друга якого потрібно знайти
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));

// Написати функцію яка буде повертати масив імен друзів які онлайн
// console.log(getOnlineFriends(friends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));

// Написати функцію яка буде повертати об’єкт масивів імен друзів які офлайн та онлайн. Створити 2 масива онлайн і офлайн, якщо тру - в перший, якщо ні - в другий
// const getFriendsByStatus = function () {};

// const friendByStat = {
// onlineFriends: [],
// offlineFriends: [],
// }
// console.log(getFriendsByStatus(friends));

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

const findByName = function (array, friend) {
  for (const i of array) {
    if (i.name === friend) {
      console.log(`Ваш друг - Poly`);
    } else {
      console.log("Такого друга немає");
    }
  }
}

console.log(findFriendByName(friends, "Poly"));

///////////////////////////////////////

const a = 1;

//Якщо ми передаємо значення з однієї змінної
// в іншу, то в іншій змінній записується копія
// цього значення.Тобто це називається присвоєння
// за значенням.

console.log(a);

let b = a;

console.log(b);

b = 2;

console.log(b);

//У випадку зі складними типами даних, якщо ми передамо значення з однієї змінної в іншу(об'єкт або масив), то іншу змінну передається оригінал посилання на оригінал цього об'єкту(яким є значення першої змінної). Це називаєтьсяпосилальний тип або присвоєння за посиланням.

const objectA = {
  x: 1,
  y: 2,
}

const objectB = objectB;
console.log(objectB);

objectB.x = 3;

console.log(objectA);
console.log(objectB);

/////////////////////////////////////

const c = 5;
const d = 5;

console.log(c === d);

const e = {
  x: 1,
}

const f = {
  x: 1,
}

console.log(e === f);

//{} === {} //Буде false, тому що це дві різні комірки
//Те саме з масивами

// console.log([] === []);

//Масиви і функції це також об'єкти

const array = [1, 2, 3, 4, 5];
array.push(6);

console.log(array);

array.test = "hello";

console.log(array);

// {
//   "0": 1,
//     "1": 2,
//     ...
//   test: "hello",
// }





// const listFlower = ["Rose", "Lily", "Mariold", "Chamomile", "Peonies", "Crocus"];

// console.log(listFlower);
// console.log(typeof listFlower);
// console.log(listFlower[2]);

// const Marigold = listFlower[2];
// console.log(Marigold);

// const flowerQuantity = listFlower.length;
// console.log(flowerQuantity);

// const lastFlowerIndex = listFlower.length - 1;
// console.log(listFlower[lastFlowerIndex]);

// for (let i = 0; i < listFlower.length; i += 1) {
//     console.log(listFlower[i]);
// }

// const friends = [
//   ["Misha", "Ilya", "Kazimir"],
//   ["Sasha", "Maksym"]
// ]

// console.log(friends[1][1]);

// Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (smallestNumber > number) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let summa = 0;
// // for (let i = 0; i < array1.length; i++) {
// // summa += array1[i]
// // }
// // for (let i = 0; i < array2.length; i++) {
// // summa += array2[i]
// // }
// // console.log(summa);
// for (let number of array1) {
//   summa += number;
// }
// for (let number of array2) {
//   summa += number;
// }
// console.log(summa);

// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// - Спочатку через for
// - Потім через for...of
// - Логіка break
// - Метод includes() с тернарним оператором

// const savedLogins = ["login1", "login2", "login3"];
// userLogin = prompt("Введіть логін:").toLowerCase;
// let message;

// for (let i = 0; i < savedLogins.length; i++) {
//   if (userLogin === savedLogins[i]) {
//     message = `Користувач ${userLogin} знайдено`;
//   }
// }

// if (message === undefined) {
//     message = `Користувач ${userLogin} не знайдено`;
// }

// Написати скрипт який порахує сумму всіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     } else {
//         continue;
//     }
// }

// console.log(total);

// let word = prompt("Введіть слово");
// for (let i = 0; i < word.length; i++) {
//   if ((i = i.toLocaleUpperCase())) {
//     word = i.toLocale.LowerCase();
//   } else {
//     i = i.toLocaleUpperCase();
//   }
// }

// //метод split
// const message = "Hello world!";
// const letters = message.split("");
// console.log(letters);

// const words = message.split(" ");
// console.log(words);

// const test = message.split("l");
// console.log(test);

// //метод join
// const array = ["Sasha", "Dima", "Slava", "Vika", "Ira"];
// console.log(array.join(", "));

// //метод IndexOf
// const names = ["Olya", "Olena", "Oleksandr", "Cavin"];
// console.log(names.indexOf("Olena"));
// console.log(names.indexOf("Olya"));

// const text = "Hello planet!";
// console.log(text.indexOf("planet"));
// console.log(text.indexOf(" "));

// console.log(names.indexOf("Hilal"));

// //метод Includes
// const namesOfHouses = ["121a", "32a", "453k", "98t", "736f"];
// const isEllementNotArray = namesOfHouses.includes("131t");
// console.log(!namesOfHouses.includes("121a"));
// console.log(isEllementNotArray);

// let title = "Top 10 benefits of React framework";

// let result = title.split(" ");
// result = result.join("-");
// result = result.toLowerCase();
// console.log(result);

// const result = title.split(" ").join("-").toLowerCase();
// console.log(result);

// const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль.

// const message = "Welcome to Ukraine!";
// const letters = message.split("");
// console.log(letters);

// const locatedLetter = message.indexOf("l");
// console.log(locatedLetter);

// const arrayLetters = letters.join(" ");
// console.log(arrayLetters);

// Створити масив гравців. додати до кожного гравця -N, де n - це порядковий номер.
// Наприклад, “Poly” => “Poly-1”

const players = ["Бущан", "Конопля", "Сваток", "Таловєров", "Сидорчук", "Степаненко", "Ярмоленко", "Маліновський", "Яремчук", "Мудрик"];

for (let i = 0; i <= 10; i += 1) {

    for (let player of players) {
        i += 1;
        player = player + "-" + i;
        console.log(player);
    }

}

//метод push

// const friends = ["Artem", "Maksym", "Vika"];

// console.log(friends);

// friends.push("Dima", "Test");

// console.log(friends);

// friends.pop();

// console.log(friends);

// friends.shift();

// console.log(friends);

// friends.unshift("Ira");



// const arr = [1, 2, 3, 4, 5];

// arr.unshift(-1, 0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.push(6, 7);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr.slice(0, 2));

// const arrCopy = arr.slice(3, 6);
// console.log(arrCopy);

// const arrCopy0 = arr.slice(0, arr.length - 1);
// console.log(arrCopy0);

// const numbers = [1, 2, 3, 4, 5];

// const deletedNumbers = numbers.splice(0, 1);
// console.log(deletedNumbers);
// const arr = [1, 2, 3, 4, 5];

// arr.unshift(-1, 0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.push(6, 7);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr.slice(0, 2));

// const arrCopy = arr.slice(3, 6);
// console.log(arrCopy);

// const arrCopy0 = arr.slice(0, arr.length - 1);
// console.log(arrCopy0);

//метод splice

const numbers = [1, 2, 3, 4, 5];

numbers.splice(0, 1);

console.log(numbers);

//метод concat

// const fruits = ["apple", "bananas", "pineapples"];
// const vegetables = ["onions", "tomatoes", "carrots", "potatoes"];
// const iceCreams = ["milk", "vanilla", "chocolate", "granate", "lavanda"];
// const food = vegetables.concat(fruits, iceCreams);
// console.log(food);
// console.log(vegetables);

// //Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Класика");
// console.log(styles[0]);
// styles.shift();
// styles.unshift("Pen", "Pessi");
// console.log(styles);

// styles.splice(0, 1, "Pen", "Pessi");
// console.log(styles);

//Створіть масив фруктів, для якого:
// 1) за допомогою методів масиву видаліть по фрукту з початку та кінця, на їх місце додати нові фрукти;

// */

// 2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);

// 3) із зміненого масиву створіть повідомлення.


// Для масиву:
// 1) [1, 2, 3] додайте в кінець елементи 4, 5, 6;

// 2) [1, 2, 3] додайте на початок елементи 4, 5, 6;

// 3) ['js', 'css', 'jq'] на екрані виведіть перший елемент;

// 4) ['js', 'css', 'jq'] виведіть останній елемент на екран;

// 5) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [1, 2, 3];

// 6) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [4, 5].

// const array1 = [1, 2, 3];

// array1.push(4, 5, 6);
// const lastIndex = array1.length - 1;
// array1.splice(lastIndex, 0, 4, 5, 6);
// console.log(array1);

// const array2 = [1, 2, 3];

// array2.unshift(4, 5, 6);
// array2.splice(0, 0, 4, 5, 6);
// console.log(array2);

// const languages = ["js", "css", "jq"];

// alert(languages[0]);
// alert(languages[2]);


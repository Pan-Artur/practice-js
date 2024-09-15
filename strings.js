const testMessage = "I live in ";
const city = "Vinnytsia";
const country = "Ukraine."
const fullMessage = testMessage + " " + city + ", " + country;
console.log(fullMessage);
// console.log(testMessage + " " + city + ", " + country);
console.log(testMessage, city, country);

console.log(10 + "3");
console.log("3" + 10);
console.log(typeof ("3" + null));
console.log(2 + 2 + "3");
console.log(2 + "3" + 2);
console.log("3" + 2 + 2);

const string = "I love borscht!";
console.log(string.length);
const stringLength = string.length;

const firstLetter = string[0]
console.log(firstLetter);
const nextLetter = string[6];
console.log(nextLetter);

const lastLetter = string[string.length - 1];//останній символ
console.log(lastLetter);

const lowerString = string.toLowerCase();
console.log(lowerString);

const upperString = string.toUpperCase();
console.log(upperString);

const text = "Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!";
const index = text.indexOf("я");
console.log(index);
const space = text.indexOf(" ");
console.log(space);
const namePosition = text.indexOf("Абдул, це");
console.log(namePosition);
const indexTest = text.indexOf("абдул");
console.log(indexTest);
const checkName = text.includes("Абдул, це");
console.log(checkName);

const x = "Артур";
const y = "Панковець";
const z = "Готелі";
const q = 4;
const text2 = "Гість" + " " + x + " " + y + " " + "поселяється в" + " " + z + " " + "номері" + " " + q;
console.log(text2);

// const askNumber = prompt("Введіть число хвилин");
// const numberHours = askNumber / 60;
// const days = Math.floor(numberHours / 24);
// const hours = Math.floor(numberHours % 60);
// const modHours = String(hours).padStart(2, 0);
// const minutes = modHours % 60;
// const modMinutes = String(minutes).padStart(2, 0);
// console.log("Дні:" + " " + days + ";" + " " + "Години:" + " " + hours + ";" + " " + "Хвилини:" + " " + minutes + ";");

const testString = "Hello world!";
console.log(testString.startsWith('Hello  '));
console.log(testString.endsWith('!'));

const testSlogan = " My name is Artur";
console.log(testSlogan);
console.log(testSlogan.length);

const newTestSlogan = testSlogan.trim();
console.log(newTestSlogan);
console.log(newTestSlogan.length);

const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const fullString2 = string2.padStart(60, ".");
console.log(fullString2);
const fullString1 = string2.padEnd(60, "!");
console.log(fullString1);

const string3 = string2.replace("РОЗПРОДАЖ", "ГАРЯЧІ ПРОПОЗИЦІЇ");
console.log(string3);

const string4 = string2.search("РОЗПРОДАЖ");
console.log(string4);

const string5 = string2.slice(11, 20);
console.log(string5);

const string6 = string2.slice(11, string2.length);
console.log(string6);

//Створи змінну яка буде зберігати рядок "Ваш баланс поповнено на 1". Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.
const newMessage = "Ваш баланс поповнено на 1";
const newMessageLength = newMessage.length;
console.log(newMessageLength);
const newMessage2 = newMessage.padEnd(30, 0);
console.log(newMessage2);

const orderMsg = `Ви замовляєте 15 тістечок.`;
console.log(orderMsg.includes(15));
console.log(orderMsg.indexOf('1'));

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
// const myName = "Artur";
// const symbol = myName.charAt(0);
// console.log(symbol);

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод гeplace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
// const myName = "Artur";
// const myNameReplace = myName.replace("A", "@");
// console.log(myNameReplace);

// Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод.substring(), вивести підстроку, яка містить перші 4 символи слова "Java".
const string7 = "JavaScript";
const newString = string7.substring(0, 4)
console.log(newString);

const myName = "Artur";
const mySurname = "Pankovets";
const age = 13;
const message = myName + " " + mySurname + " " + "is" + " " + age;
console.log(message);

const message2 = `${myName} ${mySurname} is ${age}`;
console.log(message2);

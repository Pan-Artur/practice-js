// цикл for
// i += 1 або i ++ 1 це теж саме що й i = i + 1

// for (let i = 0; i < 10; i += 1) {
//     console.log(`Виводимо число ${i}`);
// }

// Напиши скрипт який підрахує загальну суму зарплат працівників.
// Кіл-ть працівників зберігається в змінній employees.
// Зарплата кожного працівника це випадкове число а від 500 до 5000
// Записaати суму в змінну totlSalary та вивести в консоль

// let totalSalary = 0;
// const employees = 10;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 1; i <= 10; i += 1) {
//     const firstSalary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     // console.log(firstSalary);
//     totalSalary += firstSalary;
//     console.log(`Зарплата працівника номер ${i} - ${firstSalary}`);
// }

// console.log(totalSalary);

// Напиши скрипт який підрахує суму всіх парних чисел, в які входять в діапазон чисел в змінних від min до max.
// Наприкад, якщо min=0 та max=5, то діапазон 0-5, та в ньому два парні числа - 2 та 4, їх сума 6.

// let min = 0;
// let max = 9;
// let sum = 0;

// for (let i = 0; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         sum += i
//     }
// }

// console.log(sum);

// for (let i = 0; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     } else {
//         sum += i;
//     }
// }

// console.log(sum);

// for (let i = 0; i <= 15; i += 1) {
//     if (i === 9) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let number = Number(prompt('Введіть число, а я його спробую відгадати: '))
// for (let i = 0; i <= 100; i += 1) {
//     if (i === number) {
//         alert(`Я думаю це число: ${i}`);
//         break;
//     }
// }

// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i += 1;
// }

// let i = 1;

// do {
//     console.log(i);
//     i += 1;
// } while (i <= 5);

// for (let number = 0; number < 5; ) {
//   console.log(`Число ${number}`);
// }

// let number = 0;

// while (number < 5) {
//     console.log(`Число ${number}`);
// }

// Написати скрипт який буде перевіряти середній
// бал успішності учня.Прервати роботу циклу, коли
// середній бал буде меньше 7.

// let kid;

// for (let kid = 1; kid <= 7; kid += 1) {
//     // console.log(kid);
//     const ball = Math.round(Math.random() * (12 - 1) + 1)
//     console.log(`в учня номер ${kid} середній бал становить = ${ball}`)
// }

// for (let i = 1; i <= 7; i += 1) {
//     const mark = Math.round(Math.random() * (12 - 1) + 1);
//     console.log(mark);
// }

// let i = 1;
// while (i <= 7) {
//     const Mark = Math.round(Math.random() * (121) + 1);
//     console.log(Mark);
//     i += 1;
// }

// for (let i = 1; i <= 9; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 1;

// while (i <= 10) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     }
//   i += 1;
// }

// Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число ввести ще раз и т.д. попросити

// let number;

// do {
// number = Number(prompt("Введіть число більльше за 100")); 0
// } while (number > 100);

//Цикл повинен питати число поки відвідувач не введе число, більше 100, або не натисне кнопку Відміна (ESC).

// let number;

// do {
//     number = Number(prompt("Введіть число більше за 100:"));

//     if (Number(number) > 100 || number === "null") {
//         break;
//     }

//     console.log(number);
// } while (number < 100 && number !== null);

//  Напиши скрипт, який імітує авторизацію адміністратора в панелі управління. Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:
// - Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// - В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// - В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// - Після всіх перевірок вивести в alert значення змінної message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const checkPassword = prompt("Введіть пароль!");


// if (checkPassword === ADMIN_PASSWORD) {
//   message = "Ласкаво просимо!";
// } else if (checkPassword === null) {
//   message = "Скасовано користувачем!";
// } else {
//   message = "Доступ заборонений, невірний пароль!";
// }

// alert(message);

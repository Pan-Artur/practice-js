// const a = 5;
// console.log(a);

// if (5 > 4) {
//     const b = 2;
//     console.log(b);
//     console.log(a);
// }
// //console.log(b);

// function est() {
//     const c = 6;
//     if (c === 6) {
//         const d = 10;
//     }
//     console.log(c);
// }
// // console.log(c);
// est()

// const a = 10;

// if (true) {
//     console.log("test");
//     const b = 5;

//     if (true) {
//         const d = 4;

//         console.log(d);

//         console.log(b);

//         if (true) {
//             console.log(d);
//         }
//     }
// }

//  Напиши скрипт вибору готеля по кількості зірок.
//  1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'

// const stars = prompt("Виберіть кількість зірок: ");

// if (stars === 1) {
//     alert("20$");
// } else if (stars === 2) {
//     alert("30$")
// } else if (stars === 3) {
//     alert("50$")
// } else if (stars === 4) {
//     alert("70$")
// } else if (stars === 5) {
//     alert("120$")
// } else {
//     alert("Такої кількості зірок немає")
// }

// switch (stars) {
//   case 1:
//     alert("20$");
//     break;

//   case 2:
//     alert("30$");
//     break;

//   case 3:
//     alert("50$");
//     break;

//     case 4:
//     alert("70$");
//     break;

//     case 5:
//         alert("120$");
//     break;

//     default:
//         alert("Такої кількості зірок немає");
// }

// Напиши скрипт вибору опції доставки товару.
// Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр,
// 3 - пошта.В змінну message записати повідомлення в залежності
// від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//             - 'Посилка буде відправлена сьогодні'
//             - 'Вам передзвонит менеджер'.

const option = Number(prompt("Вкажіть свій вид опції."));
let message;

// if (option === 1) {
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
// } else if (option === 2) {
//     message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
// } else if (option === 3) {
//     message = 'Посилка буде відправлена сьогодні';
// }

// alert('Вам передзвонить менеджер');

// switch (option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//         break;

//     case 2:
//         message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
//         break;

//     case 3:
//         message = 'Посилка буде відправлена сьогодні';
//         break;
// }

console.log(message);

console.log("Вам передзвонить менеджер");

// if (option === 1 || option === 2) {
//   message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
// } else if (option === 3) {
//   message = "Посилка буде відправлена сьогодні";
// }

switch (option) {
  case 1:
  case 2:
    message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
    break;

  case 3:
    message = "Посилка буде відправлена сьогодні";
    break;
}

//Змінна lang може приймати 4 значення:
//'ua', 'en', 'ru', 'fr'.За допомогою конструкції
//switch виведи на екран назву місяця в залежності
// від обраної мови.Наприклад, якщо lang = 'fr', то в
// консоль виводимо "Janvier"

const lang = prompt("Введіть мову (ua, en, ru, fr)");
switch (lang) {
    case 'ua':
        alert("Місяць");
        break;
    
    case 'en':
        alert('Moon');
        break;
    
    case 'ru':
        alert('Луна');
        break;
    
    case 'fr':
        alert('Janvier');
        break;
    
    default:
        alert("Будь ласка введіть мову з перечислених;");
}

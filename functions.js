//оголошення функції

// function showMessage () {
//     let message = "Hello world!";
//     message = message.toUpperCase();
//     return message;
// }

//виклик функції

// const message2 = showMessage();

// console.log(message2);

////////////////////////////////////

// function test () {
//     return "test";
// }

// console.log(test());

////////////////////////////////////

// дані приведені в круглих дужках при виклику функції називають аргументами, і вони ПЕРЕДАЮТЬ дані у функцію
// параметри ПРИЙМАЮТЬ дані у функцію (там де вона створена) а аргументи ПЕРЕДАЮТЬ дані у Виклику функції

//змінні в круглих дужках в створеній фунції називаються пераметрами

// function sumNumbers (number1, number2, number3, number4, number5) {
//     const sum = number1 + number2 + number3 + number4 + number5;
//     return sum;
//     // return number1 + number2 + number3 + number4 + number5;
// }

//дані приведені в круглих дужках при виклику функції називають аргументами

// console.log(sumNumbers(1, 2, 3, 4, 5));

// console.log(sumNumbers(10, 10, 10, 10, 10));

/////////////////////////////////

//функціональний вираз, перший спосіб

// const createMessage = function () {
//     return "Привіт, я Артур!";
// }

// console.log(createMessage());

//функціональний вираз, другий спосіб

// const createMessage = () => {
//     return "Привіт, я Артур!";
// }

// console.log(createMessage());

////////////////////////////////////

// const numbers = [13, 14, 15];

// function sumNumbers(numbersArray) {
//     console.log(numbersArray);

//     let result = 0;

//     for (let number of numbersArray) {
//         result += number;
//     }

//     return result;
// }

// console.log(sumNumbers(numbers));

////////////////////////////////

// const test = [65, 24, 90];

// console.log(sumNumbers(test));

// console.log(sumNumbers([14, 28, 97]));

/////////////////////////////////

// const array = [1, 2, 3, 4, 5];

// function multiplyNumbers() {
//     let result = 1;
//     console.log(arguments);
//     // let result = numberOne * numberTwo;
//     for (let i = 0; i < arguments.length; i += 1) {
//         // result *= arguments[i];
//         //Результат множить на кожне число з псевдомасиву "arguments"
//         result = result * arguments[i];
//         //1 * 2 (на першій ітерації)
//         //тепер result = 2
//         //2-га ітерація
//         //у  змінній result виконується вираз справа від дорівнює (2 * 2)
//         //тепер result = 4
//         console.log(result);
//     }

//     return result;
// }

// console.log(multiplyNumbers(2, 2));

// console.log(multiplyNumbers(77, 12));

// function multiplyNumbers(...numbers) {
//   let multiply = 1;

//   //const numbers = Array.from(arguments);
//   // Метод array.from() переводить псевдомасив arguments в повноцінний масив і записує його в змінну numbers
//   // Ми цю дію зробили тому, що на псевдомасиві працюють не всі методи
//   console.log(numbers);

//   for (let i = 0; i < numbers.length; i++) {
//     multiply *= numbers[i];
//     // спочатку multiply = 1, після виконання виразу multiply = 3,
//     // на 2 ітерації multiply = 3*2 - вийде 6 і перезапишеться змінна multiply = 6
//     // на 3 ітерації multiply = 6*6 - вийде 36 і перезапишеться змінна multiply = 36
//     // на 4 ітерації multiply = 36*10 - вийде 360 і перезапишеться змінна multiply = 360
//     console.log(multiply);
//     }
    
//   return multiply;
// }

// console.log(multiplyNumbers(3, 2, 6, 10));

////////////////////////////////////////////

//1 спосіб

function multiplyNumbers(...numbers) {
  let multiply = 1;

  //const numbers = Array.from(arguments);
  // Метод array.from() переводить псевдомасив arguments в повноцінний масив і записує його в змінну numbers
  // Ми цю дію зробили тому, що на псевдомасиві працюють не всі методи
  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    multiply *= numbers[i];
    // спочатку multiply = 1, після виконання виразу multiply = 3,
    // на 2 ітерації multiply = 3*2 - вийде 6 і перезапишеться змінна multiply = 6
    // на 3 ітерації multiply = 6*6 - вийде 36 і перезапишеться змінна multiply = 36
    // на 4 ітерації multiply = 36*10 - вийде 360 і перезапишеться змінна multiply = 360
    console.log(multiply);
  }

  return multiply;
}

/////////////////////////////////////

//2 спосіб

function multiplyNumbers(...words) {
  let multiply = "";

  console.log(words);

  for (let i = 0; i < words.length; i++) {
    multiply += words[i];
    console.log(multiply);
  }
  return multiply;
}

multiplyNumbers("Рядок", "дуже", "крутий");

///////////////////////////////////////

// область видимості - це доступність змінної у певному місці в коді

//це глобальна змінна

const text = 'Hi World!';

function showText () {
  // фігурні дужки створюють нову область видимості
  alert(text);
  const a = 'Dima go back';
  console.log(a); // working
  if (true) { 
    console.log(a); // working
    // змінні які створені у фігурних дужках (блочній області видимості) - 
    // називаються локальними змінними 
    const b = '0 :(';
    if (true) { 
      const c = '1 :)'; 
    }
  }
  // console.log(b); // not working 
};

// console.log(b); // not working 
console.log(showText());
// console.log(a); // not working



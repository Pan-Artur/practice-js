//Логічне та (оператор &&) запинається; вертає те,
//  на чому запнулося чи останній операнд.
//Тобто всі умови мають бути true, щоб виконався код.

console.log(10 && 0 && "aaa");
console.log("false" && "0" && " ");

//Логічне або (оператор ||) запинається на false,
// вертає те, на чому запнулося чи останній оперант.
// || шукає перше true aбо останній false(якщо немає
// правди).

console.log(null || 0 || "aaa");
console.log(false || 5 || null || 0);

console.log(6 || 2 && 88);
console.log(6 && 0 || 98);
console.log(5 && 0 || 77);
console.log(1 && 10 && 12 && 8 || 65);

//Логічне не (оператор !) робить інверсію правди
// на неправду і навпаки, неправду на правду.

console.log(!0);

//Напиши скрипт який провіряє вхождження числа
// * в відрізок x1 та x2.

const number1 = 0;
const number2 = 100;
const testNumber = 65;
const answer = testNumber > number1 && testNumber < number2;
console.log(answer);
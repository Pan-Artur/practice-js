const printMessage = function (message) {
        alert(message);
};
    
const higherOrderFunction = function (callback) {
    const string = "Hello World!";
    callback(string);
}

higherOrderFunction(printMessage);

// const printSecondMessage = function (message) {
//   alert(message);
// };

// const higherOrderSecondFunction = function (callback) {
//   const string = "Hello World!";
//   callback(string);
// };

// const biggerLetters = function ()

// higherOrderSecondFunction(biggerLetters(printSecondMessage));



//оголошення функції function declaration

// function countFriends(friends) {
//     const friendQuantity = friends.length;
//     return friendQuantity;
// }

// const numberFriends = ["Ruslan", "Maksym", "Nikita"];
// countFriends(numberFriends);

// console.log(countFriends(numberFriends));



//функціональний вираз function expression

// const countFriends = function (friends) {
//     const friendQuantity = friends.length;
//     return friendQuantity;
// }

// const numberFriends = ["Ruslan", "Maksym", "Nikita"];
// countFriends(numberFriends);

// console.log(countFriends(numberFriends));

//стрілкові функції
//явне повернення це коли в функції стоїть return

// const countFriends = (friends) => {
//   const friendQuantity = friends.length;
//   return friendQuantity;
// };

// const numberFriends = ["Ruslan", "Maksym", "Nikita"];
// countFriends(numberFriends);

// console.log(countFriends(numberFriends));

//скоротимо функцію використовуючи неявне повернення

const countFriends = (friends) => friends.length;

const numberFriends = ["Ruslan", "Maksym", "Nikita"];
countFriends(numberFriends);

console.log(countFriends(numberFriends));

/////////////////////////////////////////////

const showMessage = (result) => `Загальна сума вийшла ${result(3, 2, 1)}`;

const message = showMessage((a, b, c) => a + b + c);

console.log(message);

///////////////////////////////////////////////

const showObject = () => ({ userName: "Artur", userAge: 13 });

console.log(showObject());










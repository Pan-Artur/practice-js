// const articleEl = document.querySelector(".main-article");
// const imgEl = document.querySelector(".img");
// const mainItem = document.querySelector(".main-item");
// const itemsEl = document.querySelectorAll(".main-item");
// const targetLink = document.querySelector("[target]");
// const mainList = document.querySelector(".main-list");
// const textEl = document.querySelector(".text");

// console.log(articleEl);
// console.log(mainItem);
// console.log(itemsEl);
// console.log(targetLink);

// articleEl.style.backgroundColor = "skyblue";
// articleEl.style.width = "500px";

// imgEl.src = "";

// const testEl = document.querySelector("form");
// console.log(testEl);

// console.log(imgEl.parentNode);
// console.log(mainList.childNodes);

// textEl.textContent = "test text";
// textEl.classList.add("test");
// textEl.classList.remove("text");

// console.log(textEl);

// Дано розмітку. 
// <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="">Про нас</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="https://">Портфоліо</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="">Контакти</a>
//       </li>
//     </ul>
// Отримайте доступ до списку
// Додайте жовтий колір фону 
// Додайте клас "site-nav__link" до першого посилання
// Збільшіть розмір шрифта посилання з атрибутом href="https://"

// const list = document.querySelector(".site-nav");
// const link = document.querySelector(`[href="https://meet.google.com/nmp-xmch-kny"]`);

// console.log(list);

// const firstListElement = document.querySelector("a");

// console.log(firstListElement);

// Додайте жовтий колір фону

// list.style.backgroundColor = "yellow";

// Додайте клас "site-nav__link" до першого посилання

// firstListElement.classList.add("site-nav__link");

// console.log(firstListElement);

// Збільшіть розмір шрифта посилання з атрибутом href="https://"

// link.style.fontSize = "14px";

/////////////////////////////////////////

// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// Замініть клас на заголовку.
// Перевірте чи містить посилання клас list

// const linksOnAnotherServices = document.querySelectorAll(`[href="http://google.com"]`);

// linksOnAnotherServices.forEach((element) => element.style.color = "orange");

// ///////////////////////////////////////////////////////

// const items = document.querySelectorAll("li a");

// items[0].style.color = "red";

// items[items.length - 1].style.color = "red";

// /////////////////////////////////////////////////////

// const text = document.querySelector("h1");

// text.textContent("Заголовок");

// text.style.fontSize("small");

// ////////////////////////////////////////

// text.classList.add("main-title");

// text.classList.replace("main-title", "replacedMain-title");

// console.log(title);

// //////////////////////////////////

// const link = document.querySelector("a");

// console.log(link.classList.contains("list"));

///////////////////////////////////////////////////////////

// const articleEl = document.createElement("article");
// const titleEl = document.createElement("h1");
// const imageEl = document.createElement("img");
// const textEl = document.createElement("h6");
// const paragraphEl = document.createElement("p");

// titleEl.textContent = "Lorem ipsum";
// imageEl.src = "";
// imageEl.alt = "nothing";
// textEl.textContent = "good morning!";
// paragraphEl.textContent = "blablablablablablablabla";
// articleEl.classList.add("article-test");

// articleEl.append(titleEl, imageEl, paragraphEl);
// textEl.prepend(El);
// console.log(articleEl);

// const articleEl = document.createElement("article");
// const titleEl = document.createElement("h1");
// const imgEl = document.createElement("img");
// const imgElement = document.createElement("img");
// const rollercoasterImg = document.createElement("img");
// const parkImg = document.createElement("img");
// const paragraphEl = document.createElement("p");
// const main = document.querySelector("main");

// const formEl = document.createElement("form");
// const inputNameEl = document.createElement("input");
// const inputAgeEl = document.createElement("input");
// const inputEmailEl = document.createElement("input");
// const buttonEl = document.createElement("button");
// const checkboxEl = document.createElement("input")

// inputAgeEl.type = "text";
// inputNameEl.type = "text";
// inputEmailEl.type = "email";
// buttonEl.type = "button";
// buttonEl.textContent = "Sumbit";
// formEl.insertBefore(checkboxEl, buttonEl);

// titleEl.textContent = "Lorem Ipsum";
// imgEl.src =
//   "https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery";
// imgEl.alt = "NOThing";
// imgElement.src =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/274px-The.Matrix.glmatrix.2.png";
// imgElement.alt = "Matrix";
// imgElement.style = "border: 5px solid green";
// rollercoasterImg.src =
//   "https://www.cityguide-dubai.com/fileadmin/_processed_/3/3/csm_img-worlds-of-adventures-teaser_40e4184da1.jpg";
// rollercoasterImg.alt = "rollercoaster";
// rollercoasterImg.style = "border: 5px solid red";
// parkImg.src =
//   "https://www.arabiantourpackages.com/assets/images/tours/page_images/IMG-World-Theme-Park.jpg";
// parkImg.alt = "Park";
// paragraphEl.textContent = "Ipsum Lorem";
// articleEl.classList.add("article-test");

// articleEl.prepend(parkImg);
// articleEl.append(titleEl, imgEl, paragraphEl);
// imgEl.before(rollercoasterImg);
// imgEl.after(imgElement);
// main.append(articleEl);
// console.log(articleEl);

////////////////////////////////////////

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
    { label: 'yellow', color: 'yellow' },
    { label: 'orange', color: '#orange' },
];

const listEl = document.createElement("ul");

colorPickerOptions.forEach((obj) => {
const itemEl = document.createElement("li");
listEl.append(itemEl);

const buttonEl = document.createElement("button");
    buttonEl.textContent = obj.label;
    buttonEl.style.color = obj.color;
    buttonEl.style.backgroundColor = obj.label;

    itemEl.append(buttonEl);
});

document.body.append(listEl);


//////////////////////////////////////////

//Властивість innerHTML

const boxEl = document.querySelector(".box");
boxEl.innerHTML = "<h1></h1>";

console.log(boxEl.innerHTML);

const articleLayout = `<article>
      <h1>Lorem, ipsum dolor.</h1>
      <p class="text"></p>
      <a href="google.com">link</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVokxLIcy0TDzI763NfTh743VNOzAU71ImaQ&s" alt="photo">
    </article>`;

boxEl.innerHTML = articleLayout;

const textEl = document.querySelector(".text");
textEl.textContent = "text";

console.log(textEl);
console.log(textEl.textContent);
console.log(document.querySelector("article").innerHTML);

// const linkEl = document.createElement("a");
// const articleEl = document.querySelector("article");

// articleEl.append(linkEl);

articleEl.innerHTML = `<article>
        <h1>Lorem, ipsum dolor.</h1>
        <p class="text"></p>
        <a href="google.com">link</a>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVokxLIcy0TDzI763NfTh743VNOzAU71ImaQ&s" alt="photo">
        <a href=""></a>
    </article>`;

//////////////////////////////////////////////////////////////

const secondBoxEl = document.querySelector(".second-box");
const legendTextEl = "<p>Hello world!</p>";

secondBoxEl.insertAdjacentHTML("afterbegin", legendTextEl);

//////////////////////////////////////

const images = ['https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];

// const addImg = function(arr){
//     arr.forEach(element => {
//         const imgEl = document.createElement("img");
//         imgEl.src = element;
//         boxEl.append(imgEl);
//     });
// }

const addImg = function(arr){
    // const result = arr.map(src => `<img src=${src} alt="photo"></img>`).join("");
    boxEl.insertAdjacentHTML("afterbegin", arr.map(src => `<img src=${src} alt="photo"></img>`).join(""))
}

addImg(images);








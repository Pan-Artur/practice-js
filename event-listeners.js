const buttonEl = document.querySelector(".btn");
console.log(buttonEl);

// buttonEl.addEventListener('click', () => {
//     console.log("Ви клікнути кнопку!");
// });

buttonEl.addEventListener("click", changeBackground);

function changeBackground() {
  const redVal = Math.round(Math.random() * (255 - 0));
  const greenVal = Math.round(Math.random() * (255 - 0));
  const blueVal = Math.round(Math.random() * (255 - 0));

  document.body.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
};

// buttonEl.removeEventListener("click", changeBackground);

/////////////////////////////////////////////////

// const form = document.querySelector(".hideForm");
// const formInput = document.querySelector(".form-input");
// const formBtn = document.querySelector(".form-button");
// const modal = document.querySelector(".hideModal");
// const showForm = document.querySelector(".show-btn");

// showForm.addEventListener("click", () => {
//   form.classList.toggle("hideForm");
//   console.log("click");
// });

// formBtn.addEventListener("submit", () => {
//   if (!formInput.value.length === 0) {
//     modal.classList.toggle("hideModal");
//   }
// });

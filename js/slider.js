// Отримуємо необхідні елементи
const sliderContainer = document.querySelector(
  ".houses-section .slider-container"
);
const paginationButtons = document.querySelectorAll(
  ".houses-section .pagination-buttons button"
);
const housesSectionLink = document.querySelector('a[href="#houses-section"]');

// Функція для оновлення активної кнопки пагінації
function updatePaginationButtons(activeIndex) {
  paginationButtons.forEach((button, index) => {
    if (index === activeIndex) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Функція для переміщення слайдера
function moveSlider(index) {
  // Розраховуємо зміщення (кожен слайд займає 100% ширини)
  const offset = index * -25; // -25% because total width is 400%
  sliderContainer.style.transform = `translateX(${offset}%)`;
  updatePaginationButtons(index);
}

// Додаємо обробник події кліку на посилання, що веде до .houses-section
housesSectionLink.addEventListener("click", (event) => {
  event.preventDefault(); // Запобігаємо стандартному переходу

  // Прокручуємо до початку секції .houses-section
  document
    .querySelector(".houses-section")
    .scrollIntoView({ behavior: "smooth" });

  // Показуємо перший слайд і активуємо першу кнопку
  moveSlider(0);
});

// Додаємо обробники подій для кнопок пагінації
paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    moveSlider(index);
  });
});

// Ініціалізація: показуємо перший слайд і активуємо першу кнопку
moveSlider(0);

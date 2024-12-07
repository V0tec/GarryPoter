// Функція для показу секцій і плавного прокручування для кнопки "Показати всіх персонажів"
document
  .getElementById("show-characters-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Показуємо всі секції
    document.querySelector(".hero-section__nav").style.display = "block";
    document.querySelector(".students-section").style.display = "block";
    document.querySelector(".employees-section").style.display = "block";
    document.querySelector(".houses-section").style.display = "block";

    // Отримуємо цільовий елемент для прокручування
    const targetElement = document.querySelector("#hero-section-nav");
    console.log(targetElement); // Перевірка, що елемент знайдений

    // Плавне прокручування
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });

// Функція для плавного переходу для всіх кнопок у меню hero-section__menu
document.querySelectorAll(".hero-section__menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Запобігаємо стандартному переходу за посиланням

    // Отримуємо цільовий елемент для прокручування
    const targetId = this.getAttribute("href").substring(1); // Видаляємо "#" із href
    const targetElement = document.getElementById(targetId);

    // Переконуємося, що елемент існує, і прокручуємо до нього
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Відступ на 100px, якщо потрібно
        behavior: "smooth", // Плавне прокручування
      });
    }
  });
});

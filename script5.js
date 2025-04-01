const card = document.querySelector(".card");
const cardInner = document.querySelector(".card-inner");

// Додаємо анімацію при наведенні
card.addEventListener("mouseenter", () => {
    cardInner.style.transform = "rotateY(180deg)";
});

// Повертаємо картку назад при прибиранні курсора
card.addEventListener("mouseleave", () => {
    cardInner.style.transform = "rotateY(0deg)";
});

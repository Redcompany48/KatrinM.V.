document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector(".toggle");

            // Закриваємо всі відкриті відповіді перед відкриттям нової
            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) {
                    item.classList.remove("open");
                    item.previousElementSibling.querySelector(".toggle").textContent = "+";
                }
            });

            // Перемикаємо стан вибраного питання
            if (answer.classList.contains("open")) {
                answer.classList.remove("open");
                toggle.textContent = "+";
            } else {
                answer.classList.add("open");
                toggle.textContent = "−";
            }
        });
    });
});

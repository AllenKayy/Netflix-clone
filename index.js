
/** const questions = document.querySelectorAll(".each_question");

questions.forEach((each_question) => {
  each_question.addEventListener("click", () => {
    each_question.classList.toggle("active");
  });
}); */

const questions = document.querySelectorAll(".each_question");

questions.forEach((each_question) => {
  each_question.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== each_question) {
        item.classList.remove("active");
      }
    });
    each_question.classList.toggle("active");
  });
});
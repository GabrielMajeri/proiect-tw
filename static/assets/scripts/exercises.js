const createExercise = ({ question, answers, correctAnswers }) => {
  const exercise = document.createElement("article");
  exercise.className = "exercise";
  exercise.textContent = question;

  const answerList = document.createElement("ol");

  for (const answerText of answers) {
    const answer = document.createElement("li");

    const answerCheckbox = document.createElement("input");
    answerCheckbox.type = "checkbox";

    const answerLabel = document.createElement("label");
    answerLabel.textContent = answerText;

    answer.appendChild(answerCheckbox);
    answer.appendChild(answerLabel);

    answerList.appendChild(answer);
  }

  exercise.appendChild(answerList);

  renderMathInElement(exercise);
  return exercise;
};

fetch("/exercises/simple.json")
  .then(response => response.json())
  .then(json => {
    const { difficulty, exercises } = json;
    const exerciseContainer = document.getElementById("exercises");

    for (const exercise of exercises) {
      try {
        const exerciseElem = createExercise(exercise);
        exerciseContainer.appendChild(exerciseElem);
      } catch (err) {
        console.error("Failed to render exercise:\n", err);
      }
    }
  });

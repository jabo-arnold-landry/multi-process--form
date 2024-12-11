const stepsCOntainer = document.querySelector("#steps");
const parts = [...stepsCOntainer.querySelectorAll("[data-step")];
const buttons = document.querySelectorAll("button");
let stepNumber = parts.findIndex((part) => part.classList.contains("block"));

if (stepNumber < 0) {
  stepNumber = 1;
  parts[stepNumber].classList.remove("hidden");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("next")) {
      stepNumber += 1;
    } else if (e.target.classList.contains("previous")) {
      stepNumber -= 1;
    }
    addOrRemoveSteps();
  });
});
function addOrRemoveSteps() {
  parts.forEach((step, index) => {
    step.classList.toggle("hidden", index !== stepNumber);
  });
}

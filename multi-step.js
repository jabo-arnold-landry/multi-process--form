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
const descriptions = document.querySelectorAll("#description");

const monthly = [
  {
    name: "arcade",
    price: 9,
  },
  {
    name: "advanced",
    price: 12,
  },
  {
    name: "pro",
    price: 15,
  },
];

const switctBtn = document.querySelector(".bg-blue-50");

switctBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("switch")) {
    const toggler = switctBtn.querySelector("#toggler");
    toggler.classList.toggle("mx-[1.4rem]");
    descriptions.forEach((description) => {
      const exisitingPElement = description.querySelector("#umwaka");
      if (exisitingPElement) {
        exisitingPElement.remove();
      } else {
        description.innerHTML += `<p class="text-base text-blue-950 h-4" id="umwaka">2 months free</p>`;
      }
    });
  } else {
    return;
  }
});

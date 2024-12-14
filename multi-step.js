const stepsCOntainer = document.querySelector("#steps");
const parts = [...stepsCOntainer.querySelectorAll("[data-step")];
const buttons = document.querySelectorAll("button");
let stepNumber = parts.findIndex((part) => part.classList.contains("block"));

if (stepNumber < 0) {
  stepNumber = 3;
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
const descriptions = document.querySelectorAll("#card");

const yeary = [
  {
    name: "access to multi player games",
    price: 1,
  },
  {
    name: "larger storagelarger storage",
    price: 2,
  },
  {
    name: "custom theme on your profile",
    price: 2,
  },
];
const monthText = document.querySelectorAll("#yearly");

function displayYearprice(times) {
  yeary.forEach((item, index) => {
    const { name, price } = item;
    const elements = monthText[index];
    elements.innerHTML = `
  <p class="text-sm ml-5 font-light text-gray-400 first-letter:capitalize">${name}</p>
  <span class="text-indigo-700">+$${price * times}/mo</span>
  `;
  });
}
displayYearprice(1);
const switctBtn = document.querySelector(".bg-blue-50");
const checkbox = document.querySelector("#checkbox");
switctBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("switch")) {
    const toggler = switctBtn.querySelector("#toggler");
    toggler.classList.toggle("ml-[1.4rem]");
    descriptions.forEach((description) => {
      const exisitingPElement = description.querySelector("#umwaka");
      if (exisitingPElement) {
        exisitingPElement.remove();
        displayYearprice(1);
      } else {
        description.innerHTML += `<p class="text-base text-indigo-800 mt-16 -ml-20 font-extralight h-2 lg:ml-4 lg:mt-4" id="umwaka">2 months free</p>`;
        displayYearprice(10);
      }
    });
  } else {
    return;
  }
});

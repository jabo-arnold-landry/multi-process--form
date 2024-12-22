const stepsCOntainer = document.querySelector("#steps");
const parts = [...stepsCOntainer.querySelectorAll("[data-step")];
const buttons = document.querySelectorAll("button");

let stepNumber = parts.findIndex((part) => part.classList.contains("block"));

if (stepNumber < 0) {
  stepNumber = 3;
  parts[stepNumber].classList.toggle("hidden");
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
const cardsContainer = document.querySelector("#cards");
const monthly = [
  {
    id: 1,
    name: "arcade",
    price: 9,
  },
  {
    id: 2,
    name: "advanced",
    price: 12,
  },
  {
    id: 3,
    name: "pro",
    price: 15,
  },
];
function monthDescription(times) {
  const cardsDescription = cardsContainer.querySelectorAll("#description");
  monthly.forEach((element, index) => {
    const { name, price } = element;
    const description = cardsDescription[index];
    description.innerHTML = `
    <h2 class="capitalize text-blue-900 font-semibold text-base">${name}</h2>
    <p class="text-gray-400">$${price * times}/${times <= 1 ? "mo" : "yr"}</p>
    `;
  });
}

monthDescription(1);
const yeary = [
  {
    id: 1,
    label: "online service",
    price: 1,
  },
  {
    id: 2,
    label: "larger storage",
    price: 2,
  },
  {
    id: 3,
    label: "customizable profile",
    price: 2,
  },
];

const monthText = document.querySelectorAll("#yearly");
const yearText = document.querySelectorAll(".amount");
const changeBtn = document.querySelector("#change");
const periodLabel = document.querySelector(".text-indigo-950");
const totalLabel = document.querySelector("#total");
const totalAmount = document.querySelector(".total-amount");
const switctBtn = document.querySelector(".bg-blue-50");
const checkbox = document.querySelector("#checkbox");
const cards = [...document.querySelectorAll("#card")];

const checkBoxLabel = document.querySelector("#third-part");
const labelElements = checkBoxLabel.querySelectorAll("label");

function displayLabeleAndSpans(times) {
  const spanlElements = checkBoxLabel.querySelectorAll("span");
  yeary.map((year, index) => {
    const { label, price } = year;
    labelElements[index].textContent = `${label}`;
    spanlElements[index].textContent = `+$${price * times}/${
      times <= 1 ? "mo" : "yr"
    }`;
  });
}
displayLabeleAndSpans(1);

switctBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("switch")) {
    const toggler = switctBtn.querySelector("#toggler");
    toggler.classList.toggle("ml-[1.4rem]");
    cards.forEach((card) => {
      const exisitngElement = card.querySelector("#free-month");

      if (exisitngElement) {
        exisitngElement.remove();
        monthDescription(1);
        displayLabeleAndSpans(1);
      } else {
        card.innerHTML += `<span class="text-sm -ml-[4.3rem] mt-16 text-indigo-900 font-semibold h-3 transition-all ease-in lg:ml-2 lg:mt-2 lg:h-6" id="free-month">2 months free</span>`;
        monthDescription(10);
        displayLabeleAndSpans(10);
      }
    });
  } else {
  }
});

const holder = document.querySelector("#holder");
function callOnHolder(times) {
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      index += 1;
      const findElement = monthly.find((element) => element.id === index);
      const { name, price } = findElement;
      holder.innerHTML = `<div id="one" class="bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col gap-2 p-5 flex-wrap rounded-md">
      <div class="relative flex justify-between space-y-2 mb-2 text-gray-400 text-base lg:text-xl>
       <p class="text-indigo-950 text-lg capitalize font-bold">
                  ${name}
                </p>
                <span
                  class="absolute top-4 underline cursor-pointer select-none"
                  id="change"
                  >change</span
                >
                <span class="amount text-indigo-950 font-bold">+$${
                  price * times
                }/${times <= 1 ? "mo" : "yr"}</span>
                </div>
              <div class="border-b-2 border-gray-200"></div>
            <div class="flex justify-between space-y-3 mb-2 text-gray-400 text-base lg:text-xl">      </div> 
        </div>`;
    });
  });
}

callOnHolder(1);

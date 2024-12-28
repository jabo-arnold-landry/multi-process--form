const stepsCOntainer = document.querySelector("#steps");
const parts = [...stepsCOntainer.querySelectorAll("[data-step")];
const buttons = document.querySelectorAll("button");
const progress = document.querySelector(".progress-bar");
const progressBar = [...progress.querySelectorAll("#bars")];
const form = document.querySelector("form");
const nameField = document.querySelector('input[type="text"]');
const emailField = document.querySelector("#email");
const phoneField = document.querySelector("#phone-number");
const confirm = document.querySelector('button[type="submit"]');
const totalLabel = document.querySelector("#total-text");
const totalAmount = document.querySelector("#amount");
const switctBtn = document.querySelector(".bg-blue-50");
const checkbox = document.querySelector("#checkbox");
const boxes = [...checkbox.querySelectorAll("input")];
const cards = [...document.querySelectorAll("#card")];
const toggler = switctBtn.querySelector("#toggler");
const errors = [...document.querySelectorAll("#errors")];
const inputs = [...form.querySelectorAll("input")];
const mounts = document.querySelector("#mounts");
let stepNumber = parts.findIndex((part) => part.classList.contains("block"));
if (stepNumber < 0) {
  stepNumber = 0;
  parts[stepNumber].classList.toggle("hidden");
  progressBar[stepNumber].classList.add(
    "bg-gradient-to-tr",
    "from-sky-200",
    "to",
    "bg-yellow-100",
    "text-black"
  );
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("next")) {
      e.preventDefault();
      if (stepNumber === 0 && e.target.classList.contains("next")) {
        const emailRegex = /^[\w\d]+@\w{5}\.\w{2,3}$/gim;
        const nameInput = nameField.value;
        const emailInput = emailField.value;
        const phoneInput = phoneField.value;
        if (!nameInput || !emailInput || !phoneInput) {
          errors.map((error, index) => {
            error.textContent = "This field is required";
            inputs[index].classList.toggle("border-red-300");
          });
          return;
        }
        if (!emailRegex.test(emailInput)) {
          errors[1].textContent = "The email is incorrect";
          emailField.classList.toggle("border-red-300");
          return false;
        }
        if (!/^(\+25)?(079|078|073|072)\d{7}$/gim.test(phoneInput)) {
          errors[2].textContent = "The Phone number is incorrect";
          phoneField.classList.toggle("border-red-300");
          return false;
        }
      }
      if (stepNumber === 1 && holder.innerHTML === "") {
        return alert("select a plan please");
      }
      if (stepNumber === 2 && !boxes.some((box) => box.checked)) {
        return alert("please select an option(s)");
      }

      stepNumber += 1;
    } else if (e.target.classList.contains("previous")) {
      stepNumber -= 1;
    }

    addOrRemoveSteps();
  });
});

nameField.addEventListener("input", () => {
  errors[0].textContent = "";
  inputs[0].classList.remove("border-red-300");
});

emailField.addEventListener("input", () => {
  errors[1].textContent = "";
  inputs[1].classList.remove("border-red-300");
});

phoneField.addEventListener("input", () => {
  errors[2].textContent = "";
  inputs[2].classList.remove("border-red-300");
});

confirm.addEventListener("pointerdown", (e) => {
  const fourth = document.querySelector("#fourth-part");
  fourth.querySelector("#semi-four").classList.add("hidden");
  fourth.querySelector("#buttons").classList.add("hidden");
  fourth.querySelector("#image").classList.remove("hidden");
});

function addOrRemoveSteps() {
  parts.forEach((step, index) => {
    step.classList.toggle("hidden", index !== stepNumber);
  });

  progressBar.forEach((bar, index) => {
    bar.classList.toggle("bg-gradient-to-tr", index === stepNumber);
    bar.classList.toggle("from-sky-200", index === stepNumber);
    bar.classList.toggle("to", index === stepNumber);
    bar.classList.toggle("bg-yellow-100", index === stepNumber);
    bar.classList.toggle("text-black", index === stepNumber);
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
const holder = document.querySelector("#holder");
const holderDiv = document.querySelector("#semi-holder");
const semiHolder = document.querySelector("#semi-holder");
let headersFinder;
let contentsTFinder;
function callOnHolder(times) {
  cards.forEach((card, index) => {
    card.addEventListener(
      "click",
      () => {
        index += 1;
        const findElement = monthly.find((element) => element.id === index);
        const { name, price } = findElement;
        holder.innerHTML = "";
        holder.innerHTML = `<div
                  id="one"
                  class="flex flex-col gap-2 p-5 flex-wrap rounded-md"
                >
                  <div class="relative flex justify-between space-y-2 mb-2 text-gray-400 text-base lg:text-xl">
       <p class="text-indigo-950 text-lg capitalize font-bold">
                  ${name}(${times <= 1 ? "Monthly" : "Yearly"})
                </p>
                <span
                    class="change absolute top-4 underline cursor-pointer select-none"
                    id="change"
                    >change</span
                >
                <span class="amount text-indigo-950 font-bold lg:mr-3">+$${
                  price * times
                }/${times <= 1 ? "mo" : "yr"}</span>
                </div>
              <div class="border-b-2 border-gray-200"></div>
            <div class="flex justify-between space-y-3 mb-2 text-gray-400 text-base lg:text-xl"></div> 
        </div>`;
        headersFinder = monthly.find((ele) => ele.name === name);
        totalAmount.textContent = headersFinder.price * times;

        const changeBtn = document.querySelector("#one");
        changeBtn.addEventListener("click", (e) => {
          let numberTransformation = "";
          const prices = [...holderDiv.querySelectorAll("#price")];
          const pricesLabel = [...holderDiv.querySelectorAll("#description")];
          toggler.classList.toggle("ml-[1.4rem]");
          if (e.target.classList.contains("change")) {
            holder.querySelector(".amount").textContent = `+$${price * 10}/${
              price <= 1 ? "mo" : "yr"
            }`;
            holder.querySelector("p").textContent = ` ${name}(${
              price <= 1 ? "Monthly" : "Yearly"
            })`;
            prices.forEach((price, index) => {
              pricesLabel[index].textContent = `/yr`;
              numberTransformation = Number(price.textContent);
              price.textContent = numberTransformation * 10;
            });
            numberTransformation = Number(totalAmount.textContent);
            totalAmount.textContent = numberTransformation * 10;
            mounts.textContent = `/yr`;
          } else {
            holder.querySelector(".amount").textContent = `+$${price * 1}/${
              price <= 1 ? "mo" : "yr"
            }`;
            holder.querySelector("p").textContent = ` ${name}(${
              price <= 1 ? "Monthly" : "Yearly"
            })`;
            prices.forEach((price) => {
              pricesLabel[index].textContent = "/mo";
              numberTransformation = Number(price.textContent);
              price.textContent = numberTransformation * 1;
            });
            numberTransformation = Number(totalAmount.textContent);
            totalAmount.textContent = numberTransformation * 1;
            mounts.textContent = `/mo`;
          }
        });
      },
      { once: true }
    );
  });
}
callOnHolder(1);

let holders = [];
function labelHolder() {
  let foundLabel = "";
  boxes.forEach((box, index) => {
    index += 1;
    let sum;
    box.addEventListener("change", (e) => {
      if (box.checked) {
        foundLabel = yeary.find((box) => box.id === index);
        foundLabel.price = toggler.classList.contains("ml-[1.4rem]")
          ? foundLabel.price * 10
          : foundLabel.price * 1;
        holders.push(foundLabel);
        const { label, price } = foundLabel;
        semiHolder.innerHTML += `
        <div class="flex justify-center gap-32 mb-3 text-gray-400 text-base sm:gap-52 md:gap-44 lg:justify-around lg:text-xl" id="label">
        <p>${label}</p>
        <div class="${label} text-indigo-950 flex">+$<p  id="price">${price}</p>
        <span id= 'description'> /${
          toggler.classList.contains("ml-[1.4rem]") ? "yr" : "mo"
        }</span>
        </div>
        </div>
        <div class="border-b-2 border-gray-200"></div>`;
        sum = price + 0;
        totalAmount.textContent = sum + parseInt(totalAmount.textContent);
        mounts.textContent = `/${
          toggler.classList.contains("ml-[1.4rem]") ? "yr" : "mo"
        }`;
      } else {
        const added = semiHolder.querySelector("#label");
        added.remove();
      }
    });
  });
}

labelHolder();

switctBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("switch")) {
    toggler.classList.toggle("ml-[1.4rem]");
    holderDiv.innerHTML = "";
    holder.innerHTML = "";
    cards.forEach((card) => {
      const exisitngElement = card.querySelector("#free-month");
      if (exisitngElement) {
        exisitngElement.remove();
        monthDescription(1);
        displayLabeleAndSpans(1);
      } else {
        card.innerHTML += `<p class="text-sm -ml-[4.3rem] mt-16 text-indigo-900 font-semibold h-4 transition-all ease-in lg:ml-2 lg:mt-2 lg:h-6" id="free-month">2 months free</p>`;
        monthDescription(10);
        displayLabeleAndSpans(10);
      }
    });
  }
  if (toggler.classList.contains("ml-[1.4rem]")) {
    boxes.forEach((box) => (box.checked = false));
    callOnHolder(10);
    holders = [];
    totalAmount.textContent = "";
  } else {
    boxes.forEach((box) => (box.checked = false));
    callOnHolder(1);
  }
});

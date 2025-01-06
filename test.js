// function maskify(cc) {
//   const array = cc.split("");
//   const sliced = array.slice(0, -4);
//   const masked = sliced.map((el) => "#").join("");
//   console.log(masked + array.slice(-4).join(""));
// }

// maskify("Skippy");

// function checkOccurancies() {
//   const arr1 = [1, 2, 2, 2, 3];
//   const arr2 = [2];
//   console.log(arr1.filter((items) => !arr2.includes(items)));
// }
// checkOccurancies();

// function capitalize(str) {
//   const split = str.split(" ");
//   const charNum = split
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
//   console.log(charNum);
// }

// capitalize("landry jabo");

function change(arr) {
  console.log(arr.filter((element) => element.length === 4));
}

change(["Peter", "Stephen", "Joe"]);

function countSmileys(arr) {
  // Regular expression to match valid smiley faces
  const smileyRegex = /^[:;][-~]?[)D]$/;

  // Filter the array to include only valid smiley faces and return the count
  console.log(arr.filter((smiley) => smileyRegex.test(smiley)).length);
}

// Test the function
countSmileys([":)", ";(", ";}", ":-D"]); // Output: 2

function romanCalculator(num) {
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  if (num > 4999 || num < 1) {
    return false;
  }
  let results = "";
  // let numerals = Object.keys(romans);
  for (const roman in romans) {
    while (romans[roman] <= num) {
      num -= romans[roman];
      results += roman;
    }
  }
  console.log(results);
}

romanCalculator(3);

function pigLatin(str) {
  return str
    .split(" ") // Split the string into words
    .map((word) => {
      // Check if the word contains only letters
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.slice(1) + word.charAt(0) + "ay";
      } else {
        return word; // Leave punctuation marks untouched
      }
    })
    .join(" "); // Join the words back together
}

// Test the function
console.log(pigLatin("Pig latin is cool"));

function cipher(str) {
  return str.replace(/\w/gi, (char) => {
    const chadCode = char.charCodeAt(0);
    if (chadCode >= 65 && chadCode <= 90) {
      return String.fromCharCode(((chadCode - 65 + 13) % 26) + 65);
    }

    if (chadCode >= 97 && chadCode <= 122) {
      return String.fromCharCode(((chadCode - 97 + 13) % 26) + 97);
    }
    return char;
  });
}

console.log(cipher("Jabo Arnold Landry @@"));

const pyramid = () => {
  let row = 5;
  let cols = 5;
  for (let i = 1; i <= row; i++) {
    console.log(" ".repeat(row - 1) + "*".repeat(i * 2 - 1));
  }
};

pyramid();

function camelCase(str) {
  return str.replace(/[-_](.)/gi, (match, char) => char.toUpperCase());
}
console.log(camelCase("camel-case"));

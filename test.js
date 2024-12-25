function maskify(cc) {
  const array = cc.split("");
  const sliced = array.slice(0, -4);
  const masked = sliced.map((el) => "#").join("");
  console.log(masked + array.slice(-4).join(""));
}

maskify("Skippy");

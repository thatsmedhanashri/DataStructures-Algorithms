var plusOne = function (digits) {
  digits = digits.join("");
  digits = BigInt(digits) + 1n;
  return digits.toString().split("");
};

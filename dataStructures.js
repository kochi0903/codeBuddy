// level {3}

// Example:
// exp = "{[({})]}" should be valid
// but "{[(]} should be invalid

let firstHalf = exp.slice(0, exp.length / 2);
let secondHalf = exp.slice(exp.slice / 2);
if (secondHalf.split("").reverse().join("") === firstHalf) {
  console.log("Balanced");
} else {
  console.log("UnBalanced");
}

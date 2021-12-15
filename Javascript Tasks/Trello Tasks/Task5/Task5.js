console.log("Trello Task 5");
var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
console.log(
  "======================================================================"
);
console.log("Before sorting");
console.log(arr1);
console.log(
  "======================================================================"
);
function sortNumber(a, b) {
  return a - b;
}
arr1.sort(sortNumber);
console.log("After sorting");
console.log(arr1);
console.log(
  "======================================================================"
);

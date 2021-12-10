console.log("Array tasks");

console.log("================================================");
const colors = ["red","green","yellow","pink"];
console.log(colors);
console.log("================================================");
console.log(colors[0]);
console.log(colors[colors.length-1]);
console.log("================================================");
console.log("Length of Array: "+colors.length);
console.log("Shorted of Array: " + colors.sort());
console.log("================================================");
console.log("Display all value with for each loop:");
colors.forEach(a => {
    console.log(a);
});
console.log("================================================");
console.log("Adding values in array end [push]");
colors.push("Orange");
colors.push("Purple");
console.log(colors);
console.log("Adding values in array start [unshift]");
colors.unshift("Khakhi");
console.log(colors);

console.log("================================================");
console.log("Removing values in array end [pop]");
colors.pop();
console.log(colors);
console.log("Removing values in array start [shift]");
colors.shift();
console.log(colors);

console.log("================================================");
console.log("Remove element by using splice");
colors.splice(3,1);
console.log(colors);

console.log("================================================");
console.log("Remove and Add element by using splice");
colors.splice(3,1,"Blue","Grey");
console.log(colors);

console.log("================================================");
console.log("Covert array in string");
console.log(colors.toString());
console.log("================================================");
console.log("Using join methods");
console.log(colors.join(" # "));

console.log("================================================");
const fruit=["Apple","Banana","Greps"];
console.log("Array Concating");
console.log("Colors: " + colors);
console.log("Fruits: " + fruit);    
console.log(fruit.concat(colors));
const fruitColors = fruit.concat(colors);

console.log("================================================");
console.log("Array short and reverse");
console.log(fruitColors.sort());
console.log(fruitColors.reverse());


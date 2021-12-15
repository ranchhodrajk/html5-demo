console.log("Trello Task 1");
console.log(
  "======================================================================"
);
let data = "Hello world how are you dfsdf sdfs";
console.log("String is: " + data);
console.log(
  "======================================================================"
);

let Udata = "";
Udata = data.charAt(0).toUpperCase();
for (let i = 1; i < data.length; i++) {
  if (data[i] === " ") {
    Udata = Udata + " " + data[i + 1].toUpperCase();
    i++;
    i++;
  }
  Udata = Udata + data[i];
}
console.log("Converted string is: " + Udata);

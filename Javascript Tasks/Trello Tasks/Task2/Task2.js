console.log("Trello Task 2");
console.log("======================================================================");
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// console.log(day[1]);
const date = new Date();
console.log(date);
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();
let ampm = "";
if(h<=11){
    ampm = "AM";
}
else{
    ampm = "PM";
}
const time = h +  ampm + " : " + m + " : " + s;
console.log("======================================================================");

    console.log("Today is : " + day[date.getDay()] + ". " + "Current time is: " + time);

console.log("======================================================================");
console.log("Date Tasks");

const date = new Date();
console.log("===========================================================");
console.log(date);
console.log("===========================================================");
console.log("Total Milisecond from (1970 01 01) to Current time [Parse]");
const ms = Date.parse(date);
console.log(ms);
console.log("OR");
console.log(date.getTime());
console.log("===========================================================");
console.log("Date Get Methods");
console.log(date);
console.log("Get full year: "+date.getFullYear());
console.log("Get Month: "+date.getMonth());
console.log("Get Date: "+date.getDate());
console.log("Get Hours: "+date.getHours());
console.log("Get Minutes: "+date.getMinutes());
console.log("Get Seconds: "+date.getSeconds());
console.log("Get Miliseconds: "+date.getMilliseconds());
console.log("Get Day: "+date.getDay());

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today's Day is: "+ days[date.getDay()]);

console.log("===========================================================");

const setdate = new Date();
console.log("Date Set Methods");
console.log(setdate);
setdate.setFullYear(2000);
setdate.setMonth(01); //feb
setdate.setDate(11);
setdate.setHours(12); 
setdate.setMinutes(14);
setdate.setSeconds(00); 

console.log("Setted Date: "+setdate);

console.log("===========================================================");




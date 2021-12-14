console.log("Object Tasks");
const person = {
    fname:"John",
    lname:"Doe",
    age:21,
    work:"Developer",
    fullname: function() {
        return this.fname + " " + this.lname;
    }
};

console.log(person.fname);
console.log(person.fullname());

//loop with objects
let allData="";
for (x in person){
    allData += person[x] + " ";
}
console.log(allData);

//add property in objects
person.nationality="Indian";
console.log(person);

//nestede objects
const cars = {
    company:"BMW",
    model:"GT500",
    price:"4000$",
    parts:{
        parts1:"Tyre",
        parts2:"Side glass",
        parts3:"Bonet",
        parts4:"Muj Guard"
    }
}
console.log(cars.parts.parts4);

//Arrays in object & Objects in array
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}
for(i in myObj.cars){
    console.log(myObj.cars[i]);
}
for(i in myObj.cars){
    console.log(myObj.cars[i].name);
    for(j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
    }
}
  
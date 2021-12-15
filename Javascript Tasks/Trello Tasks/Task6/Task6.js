console.log("Trello Task 6");
let data = "The Quick Brown Fox";
console.log("======================================================================");
console.log("String is:" + data);
console.log("======================================================================");
let ULdata = "";

for(let i=0;i<data.length;i++){
    if(data[i]===data[i].toUpperCase()){
        ULdata=ULdata+data[i].toLowerCase();
    }
    else{
        ULdata=ULdata+data[i].toUpperCase();
    }
}
console.log("Converted string is: "+ULdata);
console.log("======================================================================");

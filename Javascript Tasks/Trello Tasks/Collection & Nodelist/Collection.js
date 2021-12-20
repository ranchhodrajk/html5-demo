let element = document.getElementsByTagName("div");

console.log(element);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);
console.log(element[4]);

for(let x in element){
    console.log(element[x]);
}


console.log("===================================================================================================");

let nodeList = document.querySelectorAll("div");
console.log(nodeList);

for(let x in nodeList){
    console.log(nodeList[x]);
}

console.log("===================================================================================================");
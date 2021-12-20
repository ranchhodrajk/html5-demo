// document.getElementById("test").innerHTML
console.log("Get Element form id");
console.log("=======================================================");
console.log(document.getElementById("form"));
console.log("=======================================================");
console.log(document.getElementById("form").childNodes[1]);
console.log("=======================================================");

const para = document.createElement("p");
const text = document.createTextNode(`
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla alias, nisi minima saepe tenetur sed, nam repellat facere veniam in dignissimos dicta sequi cumque tempora deserunt, a eum vero repudiandae impedit? Totam magnam facilis similique.`);

document.getElementById("test1").appendChild(para.appendChild(text));

document.getElementById("test1").remove();

document.getElementById("fnameInput").setAttribute("value","Alvero");
document.getElementById("lnameInput").setAttribute("value","Moreno");

console.log("Get Attribute of First name : " + document.getElementById("fnameInput").getAttribute("value"));
console.log("Get Attribute of Last name : " + document.getElementById("lnameInput").getAttribute("value"));

console.log("=======================================================");


document.getElementById("fname").removeAttribute("value");
console.log(document.getElementById("fname").children[1]);

document.getElementById("fname").classList.add("myFname");

console.log("=======================================================");


// console.log(document.getElementById("fname").lastChild.innerHTML);
// console.log(document.getElementById("fname").firstChild.innerHTML);

console.log(document.getElementById("fname").parentNode);
console.log(document.getElementById("fname").parentNode.nodeName);

console.log("=======================================================");

console.log(document.getElementById("fname").childNodes[1]);
console.log(document.getElementById("fname").childNodes[3].classList);

console.log("=======================================================");

console.log(document.getElementById("lname").nextSibling.nextSibling);







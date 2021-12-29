const fs = require('fs');


const path = require('path');
let pathObj = path.parse(__filename);
let fileName = pathObj.base;
console.log(fileName);


//For write in the file.
fs.writeFileSync("abc.txt","This file is created by fs module.");
 
//For rewrite the created fils
// fs.writeFileSync(fileName,"This file is created by fs module [rewrite].");


//For append text in the file
fs.appendFileSync("abc.txt"," This is appended code.");


//For read text form the file
const buffData = fs.readFileSync("abc.txt");
const ogData = buffData.toString();
console.log("This is a original data: " + ogData);


//For rename file
// fs.renameSync("abc.txt","fsFile.txt");
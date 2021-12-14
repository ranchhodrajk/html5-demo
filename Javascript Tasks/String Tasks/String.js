console.log("String tasks");

let data="Hello world";

console.log("==============================================");
console.log(data);
console.log("String length: " + data.length);
console.log("==============================================");

console.log("Slice");
console.log("==============================================");
console.log("Slice: " + data.slice(6,10));
console.log("Slice: " + data.slice(6));
console.log("Slice: " + data.slice(-5,-1));
console.log("Slice: " + data.slice(-5));

//as same as Slice but not consider negative argument;
console.log("==============================================");
console.log("Substring");
console.log("==============================================");
console.log("Substring: " + data.substring(6,10));
console.log("Substring: " + data.substring(6));

//as same as Slice, second argument is use as length;
console.log("==============================================");
console.log("substr");
console.log("==============================================");
console.log("substr: " + data.substr(6,2));
console.log("substr: " + data.substr(2));
console.log("substr: " + data.substr(-4));
console.log("substr: " + data.substr(-4,2));


let testData="Hey google, Hey google"
console.log("==============================================");
console.log("Replace");
console.log("==============================================");
console.log(testData);
console.log("Replace: " + testData.replace("google","facebook"));
console.log("Replace: " + testData.replace(/google/g,"facebook"));
console.log("Replace: " + testData.replace("GOogLe","facebook"));
console.log("Replace: " + testData.replace(/Google/i,"facebook"));
console.log("Replace: " + testData.replace(/Google/ig,"facebook"));


console.log("==============================================");
console.log("TOUPPERCASE");
console.log("TOUPPERCASE: " + testData.toUpperCase());
console.log("==============================================");


console.log("tolowercase");
console.log("tolowercase: " + testData.toLowerCase());
console.log("==============================================");


console.log("concat");
console.log("concat: " + data.concat(" & ",testData));
console.log("==============================================");


console.log("Padding");
console.log("==============================================");
console.log("length: " + data.length);
console.log("padStart: " + data.padStart(15,"*"));
console.log("padStart: " + data.padEnd(15,"*"));
console.log("==============================================");


console.log("charAt & charAtCode");
console.log("charAt: " + data.charAt(6));
console.log("charAtCode: " + data.charCodeAt(6));
console.log("==============================================");




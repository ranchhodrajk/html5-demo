const os = require('os');

console.log(os.arch());
const freeMeomory = os.freemem();
console.log("Free Memory :" + `${freeMeomory / 1024 / 1024 / 1024}`);
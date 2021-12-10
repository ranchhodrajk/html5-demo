var x=11;
let a=5;
const z=22;
x=00;
a=9;
// z=33; Error :Assignment to constant variable.
console.log("var:this is outside block: x = " + x);
console.log("let:this is outside block: a = " + a);
console.log("const:this is outside block: z = " + z);
console.log("==================================================");
{
    let a=7
    console.log("var:this is inside block: x = " + x);
    console.log("let:this is inside block: a = " + a);
    console.log("const:this is inside block: z = " + z);
    console.log("==================================================");
}
// let a=7; Error :already declare
console.log("let:this is after block: a = " + a);
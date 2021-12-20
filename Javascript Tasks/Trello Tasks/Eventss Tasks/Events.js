
// onclick,
// onmouseover,
// onmouseout,
// onchange,
// oncopy,
// onblur,
// onkeypress,
// onkeyup,
// onkeydown,

console.log("Event Tasks");
const btnSub = () => {
    console.log("Button clicked [onclick]");
}
const onChangeFname = () =>{
    console.log("First name change");
    document.getElementById("test1").innerHTML="First name is change";
}
const oncopyFname = () => {
    document.getElementById("test1").innerHTML="First name is copied";
}
const oncopyLname = () => {
    document.getElementById("test1").innerHTML="Last name is copied";
}
const onChangeLname = () => {
    console.log("Last name change");
    document.getElementById("test1").innerHTML="Last name is change";
}
const onmouseoverForm = () => {
    console.log("Cursor is on form section");
    document.getElementById("test").innerHTML="Cursor is on form section";
}
const onmouseoutFrom = () => {
    console.log("Cursor is out from form section");
    document.getElementById("test").innerHTML="Cursor is out from form section";
}
const onmouseoverMe = () => {
    console.log("Cursor is on me");
    document.getElementById("test").innerHTML="Cursor is on me";
}
const onblurFname = () => {
    document.getElementById("fname").value=document.getElementById("fname").value.toUpperCase();
}
const onblurLname = () => {
    document.getElementById("lname").value=document.getElementById("lname").value.toUpperCase();
}
const onkeypressFname = ()=>{
    document.getElementById("test").innerHTML="Key Press Event Is Occure.";
}
const onkeypressLname=()=>{
    document.getElementById("test").innerHTML="Key Press Event Is Occure.";
}
const onmouseoverButton=()=>{
    document.getElementById("test").innerHTML="Cursor is on button.";
}
const onkeyupFname=()=>{
    document.getElementById("test2").innerHTML="Key is up on First name.";
}
const onkeydownFname=()=>{
    document.getElementById("test2").innerHTML="Key is down on First name.";
}
const onkeyupLname=()=>{
    document.getElementById("test2").innerHTML="Key is up on Last name.";
}
const onkeydownLname=()=>{
    document.getElementById("test2").innerHTML="Key is down on Last name.";
}
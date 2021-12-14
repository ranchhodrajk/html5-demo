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
    console.log("Mouse is on form section");
    document.getElementById("test").innerHTML="Mouse is on form section";
}
const onmouseoutFrom = () => {
    console.log("Mouse is out from form section");
    document.getElementById("test").innerHTML="Mouse is out from form section";
}
const onmouseoverMe = () => {
    console.log("Mouse is on me");
    document.getElementById("test").innerHTML="Mouse is on me";
}
const onblurFname = () => {
    document.getElementById("fname").value=document.getElementById("fname").value.toUpperCase();
}
const onblurLname = () => {
    document.getElementById("lname").value=document.getElementById("lname").value.toUpperCase();
}
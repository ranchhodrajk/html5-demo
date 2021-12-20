document.getElementById("form").addEventListener("mouseover", mouseoverForm);
function mouseoverForm  ()  {
    document.getElementById("test").innerHTML="Cursor is on form section";
}

document.getElementById("form").addEventListener("mouseout", mouseoutForm);
function mouseoutForm  ()  {
    document.getElementById("test").innerHTML="Cursor is out form section";
}

document.getElementById("fname").addEventListener("change", changeFname);
function changeFname  ()  {
    document.getElementById("test1").innerHTML="First name is change";
}

document.getElementById("fname").addEventListener("copy", copyFname);
function copyFname  ()  {
    document.getElementById("test1").innerHTML="First name is copy";
}

document.getElementById("fname").addEventListener("blur", blurFname);
function blurFname  ()  {
    document.getElementById("test2").innerHTML="First name is blur";
}

document.getElementById("fname").addEventListener("keypress", keypressFname);
function keypressFname  ()  {
    document.getElementById("test1").innerHTML="Key press on First name";
}

document.getElementById("fname").addEventListener("keydown", keydownFname);
function keydownFname  ()  {
    document.getElementById("test3").innerHTML="Key is down on First name";
}

document.getElementById("fname").addEventListener("keyup", keyupFname);
function keyupFname  ()  {
    document.getElementById("test3").innerHTML="Key is up on First name";
}

//=====

document.getElementById("lname").addEventListener("change", changeLname);
function changeLname  ()  {
    document.getElementById("test1").innerHTML="Last name is change";
}

document.getElementById("lname").addEventListener("copy", copyLname);
function copyLname  ()  {
    document.getElementById("test1").innerHTML="Last name is copy";
}

document.getElementById("lname").addEventListener("blur", blurLname);
function blurLname  ()  {
    document.getElementById("test2").innerHTML="Last name is blur";
}

document.getElementById("lname").addEventListener("keypress", keypressLname);
function keypressLname  ()  {
    document.getElementById("test1").innerHTML="Key press on Last name";
}

document.getElementById("lname").addEventListener("keydown", keydownLname);
function keydownLname  ()  {
    document.getElementById("test3").innerHTML="Key is down on Last name";
}

document.getElementById("lname").addEventListener("keyup", keyupLname);
function keyupLname  ()  {
    document.getElementById("test3").innerHTML="Key is up on Last name";
}

document.getElementById("sub").addEventListener("click", clickBtn);
function clickBtn () {
    document.getElementById("test4").innerHTML="Button is clicked";
}
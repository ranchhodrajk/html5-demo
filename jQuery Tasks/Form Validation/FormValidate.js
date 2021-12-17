$(document).ready(function(){
    $("#hiddenText").hide();
    $("#samePass").hide();
    $("#sameEmail").hide();
});
let isFname = false;
const onChangeFname=()=>{
    let fn = $("#fname").val();
    let regex = /^[a-zA-Z ]{2,15}$/;
    if(!regex.test(fn)){
        $("#fname").addClass("reject");
        console.log("invalid");
        console.log(fn);
        isFname = false;
    }
    else{
        $("#fname").addClass("success");
        $("#fname").removeClass("reject");
        console.log(fn);
        isFname = true;
    }
    console.log(fn);
}
let isLname = false;
const onChangeLname=()=>{
    let ln = $("#lname").val();
    let regex = /^[a-zA-Z ]{2,15}$/;
    if(!regex.test(ln)){
        $("#lname").addClass("reject");
        console.log("invalid");
        isLname = false;
    }
    else{
        $("#lname").addClass("success");
        $("#lname").removeClass("reject");
        console.log(ln);
        isLname = true;
    }
}
let isEmail = false;
const onChangeEmail=()=>{
    let em = $("#email").val();
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(em)){
        $("#email").addClass("reject");
        console.log("invalid");
        isEmail = false;
    }
    else{
        $("#email").addClass("success");
        $("#email").removeClass("reject");
        console.log(em);
        isEmail = true;
    }
}
let isReEmail = false;
const onChangeReEmail=()=>{
    let em = $("#reemail").val();
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(em)){
        $("#reemail").addClass("reject");
        console.log("invalid");
        isReEmail = false;
    }
    else{
        $("#reemail").addClass("success");
        $("#reemail").removeClass("reject");
        console.log(em);
        isReEmail = true;
    }
}
let isPass = false;
const onChangePass=()=>{
    let em = $("#pass").val();
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(!regex.test(em)){
        $("#pass").addClass("reject");
        console.log("invalid");
        isPass = false;
    }
    else{
        $("#pass").addClass("success");
        $("#pass").removeClass("reject");
        console.log(em);
        isPass = true;
    }
}
let isRePass = false;
const onChangeRePass=()=>{
    let em = $("#repass").val();
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(!regex.test(em)){
        $("#repass").addClass("reject");
        console.log("invalid");
        isRePass = false;
    }
    else{
        $("#repass").addClass("success");
        $("#repass").removeClass("reject");
        console.log(em);
        isRePass = true;
    }
}
let isSecAns = false;
const onChangeSecAns=()=>{
    let fn = $("#secans").val();
    let regex = /^[a-zA-Z ]{2,30}$/;
    if(!regex.test(fn)){
        $("#secans").addClass("reject");
        console.log("invalid");
        isSecAns = false;
    }
    else{
        $("#secans").addClass("success");
        $("#secans").removeClass("reject");
        console.log(fn);
        isSecAns = true;
    }
}
let isAdd = false;
const onChangeAdd=()=>{
    let fn = $("#address").val();
    let regex = /^[a-zA-Z ]{10,150}$/;
    if(!regex.test(fn)){
        $("#address").addClass("reject");
        console.log("invalid");
        isAdd = false;
    }
    else{
        $("#address").addClass("success");
        $("#address").removeClass("reject");
        console.log(fn);
        isAdd = true;
    }
}
let isCity = false;
const onChangeCity=()=>{
    let fn = $("#city").val();
    let regex = /^[a-zA-Z ]{2,20}$/;
    if(!regex.test(fn)){
        $("#city").addClass("reject");
        console.log("invalid");
        isCity = false;
    }
    else{
        $("#city").addClass("success");
        $("#city").removeClass("reject");
        console.log(fn);
        isCity = true;
    }
}
// let isPin = false;
// const onChangePin=()=>{
//     let fn = $("#pin").val();
//     let regex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
//     if(!regex.test(fn)){
//         $("#pin").addClass("reject");
//         console.log("invalid");
//         isPin = false;
//     }
//     else{
//         $("#pin").addClass("success");
//         $("#pin").removeClass("reject");
//         console.log(fn);
//         isPin = true;
//     }
// }
let isPh = false;
const onChangePh=()=>{
    let fn = $("#ph").val();
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!regex.test(fn)){
        $("#ph").addClass("reject");
        console.log("invalid");
        isPh = false;
    }
    else{
        $("#ph").addClass("success");
        $("#ph").removeClass("reject");
        console.log(fn);
        isPh = true;
    }
}
let isGen = false;
const onChangeGender=()=>{
    let gn = $("#gender").val();
    console.log(gn);
    if(gn===""){
        $("#gender").addClass("rejectOption");
        console.log("Invalid");
        isGen = false;
    }
    else{
        $("#gender").addClass("successOption");
        $("#gender").removeClass("rejectOption");
        isGen = true;
    }
}
let isSecQue = false;
const onChangeSecQue=()=>{
    let gn = $("#sec-que").val();
    console.log(gn);
    if(gn===""){
        $("#sec-que").addClass("rejectOption");
        console.log("Invalid");
        isSecQue = false;
    }
    else{
        $("#sec-que").addClass("successOption");
        $("#sec-que").removeClass("rejectOption");
        isSecQue = true;
    }
}
let isState = false;
const onChangeState=()=>{
    let gn = $("#state-id").val();
    console.log(gn);
    if(gn===""){
        $("#state-id").addClass("rejectOption");
        console.log("Invalid");
        isState = false;
    }
    else{
        $("#state-id").addClass("successOption");
        $("#state-id").removeClass("rejectOption");
        isState = true;
    }
}
let isPhone = false;
const onChangePhone=()=>{
    let gn = $("#device-ph").val();
    console.log(gn);
    if(gn===""){
        $("#device-ph").addClass("rejectOption");
        console.log("Invalid");
        isPhone = false;
    }
    else{
        $("#device-ph").addClass("successOption");
        $("#device-ph").removeClass("rejectOption");
        isPhone = true;
    }
}
let isMonth = false;
const onChangeMonth=()=>{
    let gn = $("#month").val();
    console.log(gn);
    if(gn===""){
        $("#month").addClass("rejectOption");
        console.log("Invalid");
        isMonth = false;
    }
    else{
        $("#month").addClass("successOption");
        $("#month").removeClass("rejectOption");
        isMonth = true;
    }
}
let isDay = false;
const onChangeDay=()=>{
    let gn = $("#day").val();
    console.log(gn);
    if(gn===""){
        $("#day").addClass("rejectOption");
        console.log("Invalid");
        isDay = false;
    }
    else{
        $("#day").addClass("successOption");
        $("#day").removeClass("rejectOption");
        isDay = true;
    }
}
let isYear = false;
const onChangeYear=()=>{
    let gn = $("#year").val();
    console.log(gn);
    if(gn===""){
        $("#year").addClass("rejectOption");
        console.log("Invalid");
        isYear = false;
    }
    else{
        $("#year").addClass("successOption");
        $("#year").removeClass("rejectOption");
        isYear = true;
    }
    
}


const onClickSubmit = () => {
    console.log("Clikedd");
    $("#samePass").hide();
    $("#sameEmail").hide();

  if(isFname===true && isLname===true && isEmail===true && isReEmail===true && isPass===true && isRePass===true && isSecAns===true && isAdd===true && isCity===true &&  isPh===true &&   isYear===true && isGen===true && isSecQue===true && isState===true && isPhone===true && isMonth===true && isDay===true){
    $("#mainId").hide();
    $("#hiddenText").show();
  }

  let pass = $("#pass").val();
  let repass = $("#repass").val();
  if(pass !== repass){
    $("#samePass").show();
  }

  let email = $("#email").val();
  let reemail = $("#reemail").val();
  if(email !== reemail){
    $("#sameEmail").show();
  }
}
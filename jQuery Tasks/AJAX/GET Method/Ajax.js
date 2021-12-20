$(document).ready(function(){
});
const onclickGetBtn=()=>{
    

    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    // xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload=function () {
        console.log(this.status);
        if(this.status === 200){

            let data = JSON.parse(this.response);
            
            console.log(data);

            let html = "";
            data.map((i,index)=>{
                
                html += `
                        <u><h3>Person ${index+1}</h3></u>
                        <b>Name:</b> <span>   ${i.name}</span><br>
                        <b>Email:</b> <span>   ${i.email}</span><br>
                        <b>Resident Address:</b> <span>${i.address.suite}, ${i.address.street}, ${i.address.city}-${i.address.zipcode}. </span><br>
                        <b>Company Address:</b> <span>${i.company.name}, ${i.company.catchPhrase}, ${i.company.bs}. </span><br>

                        <br>`;
                

                $("#showData").html(`
                     ${html}
                `);
            });            
        }
        else{
            $("#showData").text("Some Error occured");
        }
    }
    xhr.send();
}

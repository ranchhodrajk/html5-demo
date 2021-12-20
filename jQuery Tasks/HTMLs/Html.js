$(document).ready(function(){
    
    //===========================code start for HTML jQuery============================

        //get methods text(), html(), val(), attr() 
    $("#slide-toggle-heading").click(function(){
        alert("Text is: "+$("#slide-toggle-content").text());
    });
    $("#slide-toggle-heading").click(function(){
        alert("HTML is: "+$("#slide-toggle-content").html());
    });

    $("#main-animation").click(function(){
        alert("Text is: "+$("#main-animation").text());
    });

    $("#main-animation").click(function(){
        alert("HTML is: "+$("#main-animation").html());
    });

    $("#hide-show-toggle-heading").click(function(){
        alert("First Name Value: "+$("#fname").val());
        alert("Last Name Value: "+$("#lname").val());
    });

    $("#hide-show-toggle-heading").click(function(){
        alert("First Name ID [Attribute value] : "+$("#fname").attr("id"));
        alert("Last Name ID [Attribute value] : "+$("#lname").attr("id"));

    });

        //get methods text(), html(), val(), attr() 


    $("#fname-text").click(function(){
        $("#fname-text").text("Setted First Name:");
    });

    $("#lname-text").click(function(){
        $("#lname-text").html("<b>Setted Last Name:</b>");
    });

    $("#fname").click(function(){
        $("#fname").val("Setted First Name:(Alvero)");
    });

    $("#lname").click(function(){
        $("#lname").val("Setted last Name:(Moreno)");
    });


    // [append(), prepend(), after(), before()] Add after and before new element

    let afterEle = `<div class="fname-text-after" id="fname-text-after">First Name:</div>
                    <div><input type="text" class="aa" id="fname-after" value="Alvero"></div>`;
                
    let beforeEle = `<div class="lname-text-before" id="lname-text-before">Last Name:</div>
                    <div><input type="text" class="aa" id="lname-before" value="Moreno"></div>`;

    $("#add-before").click(function(){
        $("#fname-text").before(afterEle);
    });

    $("#add-after").click(function(){
        $("#lname").after(beforeEle);
    });

    // remove(), empty()

    $("#remove-btn").click(function(){
        $("#form").remove();
    });
    
    $("#empty-btn").click(function(){
        $("#form").empty();
    });

    
    // Add CSS class & Remove CSS Class

    $("#add-before").click(function(){
        $("#add-before").addClass("bg-btn");
    });

    // $("#fname-after").click(function(){
    //     $("#fname-after").addClass("bg-red");
    // });

    $("#add-after").click(function(){
        $("#add-after").addClass("bg-btn");
    });

    $("#remove-btn").click(function(){
        $("#remove-btn").removeClass("bg-btn");
    });

    $("#empty-btn").click(function(){
        $("#empty-btn").toggleClass("bg-btn");
    });




    //===========================code end for HTML jQuery============================



    //Show Hide Toggle
    $("#hide-show-toggle-content").hide();

    $("#hide-show-toggle-heading").click(function(){
        $("#hide-show-toggle-content").toggle();
    });

    //Fade Toggle
    $("#fade-toggle-content").hide();
    
    $("#fade-toggle-heading").click(function(){
        $("#fade-toggle-content").fadeToggle();
    });

    //Slide Toggle
    $("#slide-toggle-content").hide();
    
    $("#slide-toggle-heading").click(function(){
        $("#slide-toggle-content").slideToggle();
    });

    //Animation
    $("#main-animation").click(function(){
        $("#main-animation").animate({width:'97vw'},"slow");
        $("#main-animation").animate({height:'250px'},"slow");
        $("#main-animation").animate({fontSize:'50px'},"slow");
    });
});
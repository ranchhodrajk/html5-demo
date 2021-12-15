$(document).ready(function(){
    
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
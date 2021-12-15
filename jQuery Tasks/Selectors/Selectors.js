$(document).ready(function(){

    $("#hiddenText").hide();

    //tag
    $("h1").click(function(){
        $(this).hide();
    });

    //id
    $("#personalID").click(function(){
        $(this).css("color","brown");
    });

    $("#accountID").click(function(){
        $(this).css("color","brown");
    });

    $("#contactID").click(function(){
        $(this).css("color","brown");
    });

    //class
    $(".jqclass").click(function(){
        $(".jqclass").css("color","orange");
    });

    $(".jqclassAC").click(function(){
        $(this).css("color","orange");
    });

    $(".Contact-info-heading").click(function(){
        $(".jqclassAD").css("color","orange");
    });

    $(".submit-btn").click(function(){
        $(".main").hide();
        $("#hiddenText").show();
        $("#hiddenText").css({"color":"darkgreen"});
    });
});
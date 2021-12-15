$(document).ready(function(){

    $(".hiddenText").hide();
    $(".keyCount").hide();

    //click
    $("h1").click(function(){
        $(this).hide();
    });

    //dblclick
    $("#personalID").dblclick(function(){
        $(this).css("color","brown");
    });

    $("#accountID").dblclick(function(){
        $(this).css("color","brown");
    });

    $("#contactID").dblclick(function(){
        $(this).css("color","brown");
    });

    //mouseenter
    $(".submit-btn").mouseenter(function(){
        $(this).css({"color":"brown","border":"1px solid brown"});
    });

    //mouseleave
    $(".submit-btn").mouseleave(function(){
        $(this).css("color","white");
    });

    //mousedown
    $(".submit-btn").mousedown(function(){
        $(".main").hide();
        $(".hiddenText").show();
        $(".hiddenText").css({"color":"darkgreen"});
    });

    //focus
    $("input").focus(function(){
        $(this).css({"background-color":"#e6e6e6"});
    });

    //blur
    $("input").blur(function(){
        $(this).css({"background-color":"#ffb3b3","border":"1px solid grey","height":"24px"});
    });

    $("select").blur(function(){
        $(this).css({"background-color":"#ffb3b3","border":"1px solid grey","height":"28px"});
    });

    //keypress
    let i=0;
    $("input").keypress(function(){
        $(".keyCount").show();
        $("span").text(i += 1);
    });
    

});
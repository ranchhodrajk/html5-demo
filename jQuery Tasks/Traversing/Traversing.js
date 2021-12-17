$(document).ready(function(){

    //ancestor
    $("#Personal-info-id").parent().css({"color":"orange"});
    $("#month").parents().css({"font-size":"18px"});
    $("#month").parentsUntil("#parents-untill").css({"color":"lightblue"});

    //descendents
    $("select").children().css({"color":"orange"});
    $("select").children("option.first").css({"font-size":"19px"});

    $("#parents-untill").find("#find-h2").css({"color":"lightgreen"});
    $("#aa").find("#find-h2-or").css({"color":"red"});

    //sibilings
    $("#siblings-test").siblings().css({"color":"purple"});
    $("#sibling-next").siblings().css({"color":"grey"});
    $("#sibling-nextAll").nextAll().css({"color":"brown"});
});
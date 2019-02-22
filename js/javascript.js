//var arrow = document.getElementById("arrow");
//arrow.addEventListener("click", function(){})
// 

var $arrow = $("#arrow a");
var $off = $("main").offset().top;
$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
})

var $button = $("button");
var $off = $("header").offset().top;
$("button").on("click", function () {
    $("body, html").animate({
        scrollTop: $("header").offset().top
    }, 1000)
})

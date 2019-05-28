

$(function(){
$(".SImg").css("display", "none");
setTimeout(function() {
    $('.bluesky').fadeOut();
	}, 3000);
});





$(function(){
    $(".SImg").css({opacity:'0'});
    setTimeout(function(){
    $(".SImg").css("display", "block");
    $(".SImg").stop().animate({opacity:'1'},1000);
    },3000);
});




$(function(){
    $(".background").css({opacity:'0'});
    setTimeout(function(){
    $(".background").css("display", "block");
    $(".background").stop().animate({opacity:'1'},1000);
    },4000);
});

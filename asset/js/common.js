// Header js
$(function() {
  var depth1 = $(".gnb > li"),
      header = $("header");
    
  depth1.mouseenter(function(){
    header.stop().animate({height:"14.64vw"});
  }).mouseleave(function(){
    header.stop().animate({height:"4.84vw"});
  })

  $('.gnb_menu:nth-child(1)').mouseenter(function() {
    $('.underBar').animate({width:"3.1vw", left:"0"})
  })
  $('.gnb_menu:nth-child(2)').mouseenter(function() {
    $('.underBar').animate({width:"4.1vw", left:"8vw"})
  })
  $('.gnb_menu:nth-child(3)').mouseenter(function() {
    $('.underBar').animate({width:"4.17vw", left:"17.84vw"})
  })
  $('.gnb_menu:nth-child(4)').mouseenter(function() {
    $('.underBar').animate({width:"1.98vw", left:"27.68vw"})
  })
  $('.gnb_menu:nth-child(5)').mouseenter(function() {
    $('.underBar').animate({width:"2.92vw", left:"35.68vw"})
  })
  $('.gnb_menu:nth-child(6)').mouseenter(function() {
    $('.underBar').animate({width:"5.83vw", left:"43.68vw"})
  })
  $('.gnb_menu:nth-child(7)').mouseenter(function() {
    $('.underBar').animate({width:"4.58vw", left:"53.52vw"})
  })
  $('.gnb').mouseleave(function() {
    $('.underBar').animate({width:"0"})
  })
})


// COUNTDOWN
function updateTimer() {
  var el = $('.mainWrap');
  if(el.length <= 0){
		return;
	}

  future  = Date.parse("October 24, 2022 15:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );


$(function(){
  updateTimer();
});
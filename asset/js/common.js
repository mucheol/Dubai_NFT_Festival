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

  future  = Date.parse("October 24, 2022 10:30:00");
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

// Participation select grade
function selectGrade() {
  var el = $('#participation');
  if(el.length <= 0){
		return;
	}

  const dc01 = $('.dc01');  const dc02 = $('.dc02');  const dc03 = $('.dc03');  const dc04 = $('.dc04');  const dc05 = $('.dc05');  const dc06 = $('.dc06');  const dc07 = $('.dc07');  const dc08 = $('.dc08');  const dc09 = $('.dc09');  const dc10 = $('.dc10');  const dc11 = $('.dc11');  const dc12 = $('.dc12');  const dc13 = $('.dc13');  const dc14 = $('.dc14');
  var plaArr = [dc01, dc02, dc03, dc04, dc07, dc10, dc11, dc12, dc13, dc14]
  var preArr = [dc01, dc02, dc03, dc04, dc07, dc10, dc12, dc13, dc14]
  var golArr = [dc01, dc02, dc03, dc05, dc08, dc10, dc12, dc13, dc14]
  var silArr = [dc01, dc02, dc06, dc09, dc10, dc12, dc13, dc14]
  
  // $('.gradeBox p').on('click',function(){
  //   $(this).siblings('.p1').removeClass('active')
  //   $(this).addClass('active')
    
  //   if($('.gradeBox .pla.active')) {
  //     for(var i=0; i<plaArr.length; i++ ) {
  //       plaArr[i].css('color','red')
  //     }
  //   }else if($('.gradeBox .pre.active')) {
  //     for(var i=0; i<preArr.length; i++ ) {
  //       preArr[i].css('color','yellow')
  //     }
  //   }
  // })
  $('.gradeBox .pla').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<plaArr.length; i++ ) {
      plaArr[i].css('color','red')
    }
  });
  $('.gradeBox .pre').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<preArr.length; i++ ) {
      preArr[i].css('color','yellow')
    }
  });
  $('.gradeBox .gol').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<golArr.length; i++ ) {
      golArr[i].css('color','green')
    }
  });
  $('.gradeBox .sil').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<silArr.length; i++ ) {
      silArr[i].css('color','blue')
    }
  });
}

// program tab menu
function programTab() {
var el = $('#program');
if(el.length <= 0){
  return;
}

$('.tabBtnBox .p01').on('click',function() {
  $(this).siblings('.p01').removeClass('active')
  $(this).addClass('active')
  if($('.tabBtnBox .tab01').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media01.png" alt="" class="media01">')
    $('.chg01').html('NFT')
    $('.chg01').css('color','#C726FF')
    $('.chg01 + .horLine').css('background-color','#C726FF')
    $('.chg02').html('ᆞNFT의 과거 , 현재의 분석을 통한 NFT의 미래 방향 토론')
  }else if($('.tabBtnBox .tab02').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media02.png" alt="" class="media01">')
    $('.chg01').html('CONFERENCE')
    $('.chg01').css('color','#5B8C6D')
    $('.chg01 + .horLine').css('background-color','#5B8C6D')
    $('.chg02').html('<span>ᆞ대한민국의 다양한 기업을 중동의투자자에게 소개하는 행사<span/><span>ᆞ해외 투자자를 위한 Category 별 참여 기업 Session<span/>')
  }else if($('.tabBtnBox .tab03').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media03.png" alt="" class="media01">')
    $('.chg01').html('K-CULTURE')
    $('.chg01').css('color','#C6268F')
    $('.chg01 + .horLine').css('background-color','#C6268F')
    $('.chg02').html('<span>ᆞ2022 DUBAI K-POP Festival  Coca-Cola Arena, Dubai<span/><span>ᆞ공연을 NFT화<span/><span>ᆞ해당 NFT를 VAEX에서 거래<span/>')
  }else if($('.tabBtnBox .tab04').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media04.png" alt="" class="media01">')
    $('.chg01').html('INVESTMENT')
    $('.chg01').css('color','#2863E3')
    $('.chg01 + .horLine').css('background-color','#2863E3')
    $('.chg02').html('<span>ᆞ참여 기업과 중동 투자 Fund와 투자 연결 기회 제공<span/>')
  }
})
if($('.tabBtnBox .tab01').hasClass('active') === true){
  $('.chg01').css('color','#C726FF')
  $('.chg01 + .horLine').css('background-color','#C726FF')
}else if($('.tabBtnBox .tab02').hasClass('active') === true){
  $('.chg01').css('color','#5B8C6D')
  $('.chg01 + .horLine').css('background-color','#5B8C6D')
}else if($('.tabBtnBox .tab03').hasClass('active') === true){
  $('.chg01').css('color','#C6268F')
  $('.chg01 + .horLine').css('background-color','#C6268F')
}else if($('.tabBtnBox .tab04').hasClass('active') === true){
  $('.chg01').css('color','#2863E3')
  $('.chg01 + .horLine').css('background-color','#2863E3')
}
// $('.tabBtnBox .tab02').on('click',function() {
//   $(this).siblings('.p01').removeClass('active')
//   $(this).addClass('active')
//   $('.chg01').html('CONFERENCE')
//   $('.chg02').html('<span>ᆞ대한민국의 다양한 기업을 중동의투자자에게 소개하는 행사<span/><span>ᆞ해외 투자자를 위한 Category 별 참여 기업 Session<span/>')
// })
// $('.tabBtnBox .tab03').on('click',function() {
//   $(this).siblings('.p01').removeClass('active')
//   $(this).addClass('active')
//   $('.chg01').html('K-CULTURE')
//   $('.chg02').html('<span>ᆞ2022 DUBAI K-POP Festival  Coca-Cola Arena, Dubai<span/><span>ᆞ공연을 NFT화<span/><span>ᆞ해당 NFT를 VAEX에서 거래<span/>')
// })


}

$(function(){
  updateTimer();
  selectGrade();
  programTab();
});
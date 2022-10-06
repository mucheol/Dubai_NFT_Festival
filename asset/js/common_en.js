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
    $('.underBar').css({width:"3.1vw", left:"0"})
  })
  $('.gnb_menu:nth-child(2)').mouseenter(function() {
    $('.underBar').css({width:"6vw", left:"8.5vw"})
  })
  $('.gnb_menu:nth-child(3)').mouseenter(function() {
    $('.underBar').css({width:"4.6vw", left:"18.95vw"})
  })
  $('.gnb_menu:nth-child(4)').mouseenter(function() {
    $('.underBar').css({width:"3.1vw", left:"29.25vw"})
  })
  // $('.gnb_menu:nth-child(5)').mouseenter(function() {
  //   $('.underBar').css({width:"3.1vw", left:"37.68vw"})
  // })
  $('.gnb_menu:nth-child(5)').mouseenter(function() {
    $('.underBar').css({width:"6.9vw", left:"37.68vw"})
  })
  $('.gnb_menu:nth-child(6)').mouseenter(function() {
    $('.underBar').css({width:"5.15vw", left:"46.2vw"})
  })
  $('.gnb').mouseleave(function() {
    $('.underBar').css({width:"0"})
  })
})
// Mobile Header
$('.hamBtn').click(function(){
  $('.nav_m').addClass('on');
  $('body').css('overflow','hidden')
})
$('.xBtn').click(function(){
  $('.nav_m').removeClass('on');
  $('body').css('overflow','auto')
})

$('.gnb_m_d1').click(function(){
    $(this).siblings('.gnb_m_d1').removeClass('active')
    $(this).addClass('active')
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
  
  d  = String(Math.floor(diff / (1000*60*60*24)));
  h = String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
  m  = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
  s  = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
    
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

  const dc01 = $('.dc01');  const dc03 = $('.dc03');  const dc04 = $('.dc04');  const dc05 = $('.dc05');  const dc06 = $('.dc06');  const dc07 = $('.dc07');  const dc08 = $('.dc08');  const dc09 = $('.dc09');  const dc10 = $('.dc10');  const dc11 = $('.dc11');  const dc12 = $('.dc12');  const dc13 = $('.dc13');  const dc14 = $('.dc14');
  var plaArr = [dc01, dc03, dc04, dc07, dc10, dc11, dc12, dc13, dc14]
  var preArr = [dc01, dc03, dc04, dc07, dc10, dc12, dc13, dc14]
  var golArr = [dc01, dc03, dc05, dc08, dc10, dc12, dc13, dc14]
  var silArr = [dc01, dc06, dc09, dc10, dc12, dc13, dc14]
  
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
  $('.flexBox .dr p').css('color','#565656')
  for(var i=0; i<plaArr.length; i++ ) {
    plaArr[i].css('color','#D10000')
  }
  $('.gradeBox .pla').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<plaArr.length; i++ ) {
      plaArr[i].css('color','#D10000')
    }
  });
  $('.gradeBox .pre').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<preArr.length; i++ ) {
      preArr[i].css('color','#870EE7')
    }
  });
  $('.gradeBox .gol').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<golArr.length; i++ ) {
      golArr[i].css('color','#FCAC06')
    }
  });
  $('.gradeBox .sil').on('click',function(){
    $(this).siblings('.p1').removeClass('active')
    $(this).addClass('active')
    $('.flexBox .dr p').css('color','#565656')
    for(var i=0; i<silArr.length; i++ ) {
      silArr[i].css('color','#BAD7F0')
    }
  });

  // 모바일
  $('.tabBtn').click(function(){
    $(this).siblings('.tabBtn').removeClass('m_active');
    $(this).addClass('m_active');
    if($('.tb01').hasClass('m_active')){
      $('.fi01').siblings('.item').removeClass('m_active')
      $('.fi01').addClass('m_active')
    }else if($('.tb02').hasClass('m_active')){
      $('.fi02').siblings('.item').removeClass('m_active')
      $('.fi02').addClass('m_active')
    }else if($('.tb03').hasClass('m_active')){
      $('.fi03').siblings('.item').removeClass('m_active')
      $('.fi03').addClass('m_active')
    }else if($('.tb04').hasClass('m_active')){
      $('.fi04').siblings('.item').removeClass('m_active')
      $('.fi04').addClass('m_active')
    }else if($('.tb05').hasClass('m_active')){
      $('.fi05').siblings('.item').removeClass('m_active')
      $('.fi05').addClass('m_active')
    }
  })
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
    $('.chg02').html('<span>ᆞDiscussing the future direction of NFT through analysis of the past and present of NFT</span>')
  }else if($('.tabBtnBox .tab02').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media02.png" alt="" class="media01">')
    $('.chg01').html('CONFERENCE')
    $('.chg01').css('color','#5B8C6D')
    $('.chg01 + .horLine').css('background-color','#5B8C6D')
    $('.chg02').html('<span>ᆞAn event to introduce various Korean companies to investors in the Middle East<span/><span>ᆞSession of participating companies by category</span>')
  }else if($('.tabBtnBox .tab03').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media03.png" alt="" class="media01">')
    $('.chg01').html('K-CULTURE')
    $('.chg01').css('color','#C6268F')
    $('.chg01 + .horLine').css('background-color','#C6268F')
    $('.chg02').html('<span>ᆞ2022 DUBAI K-POP Festival Coca-Cola Arena, Dubai<span/><span>ᆞMake a performance NFT<span/><span>ᆞTrade that NFT on VAEX</span>')
  }else if($('.tabBtnBox .tab04').hasClass('active') === true){
    $('.mediaBox').html('<img src="../image/program_media04.png" alt="" class="media01">')
    $('.chg01').html('INVESTMENT')
    $('.chg01').css('color','#2863E3')
    $('.chg01 + .horLine').css('background-color','#2863E3')
    $('.chg02').html('<span>ᆞInvestment connection between participating companies and Middle East investment funds</span>')
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
}

function getGrade(){
  var el = $('#participation');
  if(el.length <= 0){
    return;
  }
 
  // 필수 input값 작성 확인
  $(function(){
    $(".gform01").submit(function(event){
      alert('The enterprise participation application has been completed.')
      return true;
    });
    $(".gform02").submit(function(event){
      alert('NFT ART TOWER participation application has been completed.')
      return true;
    });
  });
}

function event_click01() {
  if(document.getElementById("company").value==''){
    alert("Type the name of the company.");
    return false;
  }
  if(document.getElementById("companyUrl").value==''){
    alert("Type the name of the company URL.");
    return false;
  }
  if(document.getElementById("managerName").value==''){
    alert("Type the contact name.");
    return false;
  }
  if(document.getElementById("position").value==''){
    alert("Type the Affiliation and Position.");
    return false;
  }
  if(document.getElementById("contactNum").value==''){
    alert("Type the contact phone number.");
    return false;
  }
  if(document.getElementById("contactEmail").value==''){
    alert("Type the contact e-mail.");
    return false;
  }
  if(!document.getElementById("privacy").checked){
    alert("Consent is required for collecting and using personal information.");
    return false;
  }
}
function event_click02() {
  if(document.getElementById("nameNAT").value==''){
    alert("Type the contact name.");
    return false;
  }
  if(document.getElementById("contactNumNAT").value==''){
    alert("Type the contact phone number.");
    return false;
  }
  if(document.getElementById("emailNAT").value==''){
    alert("Type the contact e-mail.");
    return false;
  }
  if(!document.getElementById("privacyNAT").checked){
    alert("Consent is required for collecting and using personal information.");
    return false;
  }
}


$(function(){
  updateTimer();
  selectGrade();
  programTab();
  getGrade();
});
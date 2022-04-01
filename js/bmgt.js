$(function () {
  let sNum = 0;
  let count = $(".banner>li").length;
  let wWidth = $(window).width();
  // let liWidth = $(".banner>li:eq(0)").width();
  let obj = $(".banner>li:eq(0)").clone();
  $(".banner").append(obj);
  let copyCount = $(".banner>li").length;

  //  --- <hamburger> ---S
  // navi = false;
  // $(".guide>li:eq(0)").click(function(){
  //     if(wWidth>767){
  //         $(".gnb").toggle(function(){
  //             if(navi){
  //                 navi  = false;
  //                 $(this).css("display","none")
  //             } else {
  //                 navi = true;
  //                 $(this).css("display","block")
  //             }
  //         });
  //     }
  // });

  //mobile nav(767px)
  let ham = 0;
  $(".hamBtn").click(function () {
    if (ham == 0) {
      $("#mobileMenu").stop().animate(
        {
          left: "0px"
        },
        500
      );
      ham = 1;
    } else if (ham == 1) {
        $("#mobileMenu").stop().animate(
            {
              left: "-100%"
            },
            500
          );
          ham = 0
    }
    
    $(this).toggleClass("active");
  });

  //sub_Slide
  $("#nav").mouseenter(function () {
    $(".subMenu").stop().slideDown(500);
    $(".subBg").stop().slideDown(500);
  });
  $("#nav").mouseleave(function () {
    $(".subMenu").stop().slideUp(500);
    $(".subBg").stop().slideUp(500);
  });
  //  --- <hamburger> --- E

  $(".mGnb>li>a").click(function () {
    $(this)
      .next()
      .slideToggle(400)
      .parent()
      .siblings()
      .children(".submenu")
      .slideUp(400);
  });
  function moveBanner() {
    $(".banner")
      .stop()
      .animate(
        {
          "margin-left": -wWidth * sNum,
        },
        2000
      );
  }

  let timer = setInterval(function () {
    if (sNum == count) {
      sNum = 0;
      $(".banner").css("margin-left", 0);
    }
    sNum++;
    moveBanner();
  }, 6000);

  $(".right").on("click", (e) => {
    if (sNum >= count) {
      sNum = 0;
      $(".banner").css("margin-left", 0);
    }
    sNum++;
    moveBanner();
  });

  $(".left").on("click", (e) => {
    if (sNum <= 0) {
      sNum = count;
      $(".banner").css("margin-left", -liWidth * count);
    }
    sNum--;
    moveBanner();
  });

  function siteInit() {
    wWidth = $(window).width();
    sNum = 0;
    $(".banner").width(copyCount * wWidth);
    let bannerWidth = $(".banner").width();
    $(".banner>li").width(bannerWidth / copyCount);

    $(".banner").css("margin-left", 0);
  }

  $(window).on("resize", function () {
    siteInit();
  });

  siteInit();
});

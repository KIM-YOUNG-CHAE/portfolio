$(document).ready(function(){
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
});
    $('#nav_toggle').click(function(){
	    $('.navi,.menu_btn').toggleClass('ani');
        $('.wrap').toggleClass('modal');
	});
    $('.navi>ul>li>a').click(function(){
        $('.navi>ul>li>a').removeClass('ani')
        $(this).addClass('ani')
    })
    $('.search_btn').click(function(){
        if($('.search_wrap').hasClass('ani') === true){
            $('.search_wrap').removeClass('ani');
        }else{
            $('.search').val('');
            $('.search_wrap').addClass('ani');
        }  
	});
    
    var lastScrollTop = 0;
$(window).scroll(function(){
    
    var scroll_top = $(this).scrollTop();	
    var ts = $(this); 

    if(scroll_top >= 100) { 
        if ((scroll_top > lastScrollTop) && (lastScrollTop>0)) {
            $(".header").css("top","-200px"); 
        } else {
            $(".header").css("top","0px");
        }
        lastScrollTop = scroll_top;
    }

});
    
    /* GALLERIES */
    $('.scroll_up>p>a').click(function(){
        $('html, body').animate({scrollTop:0}, '300');
    })

    /* li */
    var gal_text_library = new Array('Space Launch System Rocket at Dawn','Prepping for Wet Dress Rehearsal','Artemis I in Moonlight','Cygnus Cargo Craft at the Space Station','A Sky View of Earth','Earth','The Earth & Moon','"Pink" Full Moon');
    var gal_text_mission = new Array('8 Years on the Red Planet','Curiosity at Glen Etive','The Red Planets Holden Crater','Curiosity Rover Gets Ready for Its Next Adventure','Launching to Study Pulsating Aurora','Small Weather Instruments','Liftoff of Landsat 9','Preparing the Sentinel-6 Michael Freilich Satellite');

    var space = new Array('.list_library>li:nth-child(1)','.list_library>li:nth-child(2)','.list_library>li:nth-child(3)','.list_library>li:nth-child(4)');
    var earth = new Array('.list_library>li:nth-child(5)','.list_library>li:nth-child(6)');
    var moon = new Array('.list_library>li:nth-child(7)','.list_library>li:nth-child(8)');
    var li_total = space.concat(earth,moon);
    
    var mars = new Array('.list_mission>li:nth-child(1)','.list_mission>li:nth-child(2)','.list_mission>li:nth-child(3)','.list_mission>li:nth-child(4)');
    var mission = new Array('.list_mission>li:nth-child(5)','.list_mission>li:nth-child(6)','.list_mission>li:nth-child(7)','.list_mission>li:nth-child(8)');
    var mi_total = mars.concat(mission);
    /* li_end */
    $('.galleries_nav a').click(function(){
        $('.galleries_nav a').css({"font-family": "NHaasGroteskTXProRg","border-bottom":"none"})
        $(this).css({"font-family": "NHaasGroteskDSProBd","border-bottom":"1px solid #ff9900"});
    });
    for(i=0;i<8;i++){
        $('.list_library>li:nth-child('+(i+1)+')>p').text(gal_text_library[i]);
        $('.list_mission>li:nth-child('+(i+1)+')>p').text(gal_text_mission[i]);
    }
    var list_library = $('.list_library>li')
    var list_mission = $('.list_mission>li')
    libraryShow(list_library);
    libraryHideShow(1,list_library,space);
    libraryHideShow(2,list_library,earth);
    libraryHideShow(3,list_library,moon);

    missionShow(list_mission);
    missionHideShow(1,list_mission,mars);
    missionHideShow(2,list_mission,mission);
/* function */
    function libraryShow(b){
        $('.library_title>a').click(function(){
            $(list_mission).hide();
            $(b).hide();
            $(b).fadeIn(300);
        })
    }
    function libraryHideShow(a,b,c){
        $('.library>li:nth-child('+a+')>a').click(function(){
            $(list_mission).hide();
            $(b).hide()
            for(i=0;i<li_total.length;i++){
                $(c[i]).fadeIn(300)
            }
        })
    }
    function missionShow(b){
        $('.mission_title>a').click(function(){
            $('.list_mission').addClass('ani')
            $(list_library).hide();
            $(b).hide()
            $(b).fadeIn(300);
        })
    }
    function missionHideShow(a,b,c){
        $('.mission>li:nth-child('+a+')>a').click(function(){
            $('.list_mission').addClass('ani');
            $(list_library).hide();
            $(b).hide();
            for(i=0;i<mi_total.length;i++){
                $(c[i]).fadeIn(300)
            }
        })
    }
/* function_end */   

    $('.list>li>a').mouseover(function(){
        $(this).css({'opacity':'.6','transition':'0.4s ease'})
    })
    $('.list>li>a').mouseleave(function(){
        $(this).css({'opacity':'1','transition':'0.4s ease'})
    })


});
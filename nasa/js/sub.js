$(document).ready(function(){
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
        $('.galleries_nav ul li a').click(function(){
            $('.galleries_nav ul li a').css({"font-family": "NHaasGroteskTXProRg"})
            $(this).css({"font-family": "NHaasGroteskDSProBd"});
        });
        for(i=0;i<8;i++){
            $('.list_library>li:nth-child('+(i+1)+')>p').text(gal_text_library[i]);
            $('.list_mission>li:nth-child('+(i+1)+')>p').text(gal_text_mission[i]);
        }
        var list_library = $('.list_library>li')
        var list_mission = $('.list_mission>li')
        libraryShow(1,list_library);
        libraryHideShow(2,list_library,space);
        libraryHideShow(3,list_library,earth);
        libraryHideShow(4,list_library,moon);

        missionShow(1,list_mission);
        missionHideShow(2,list_mission,mars);
        missionHideShow(3,list_mission,mission);
/* function */
        function libraryShow(a,b){
            $('.library>li:nth-child('+a+')>a').click(function(){
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
        function missionShow(a,b){
            $('.mission>li:nth-child('+a+')>a').click(function(){
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
        

            

    $(window).scroll(function(){
	    var ts = $(this);

        /* wedo */
        scrollAni(ts,$('.wedo_text_box'),$('.wedo_text_box'));
        scrollAni(ts,$('.wedo_left'),$('.wedo_left'))
        scrollAni(ts,$('.wedo_right_box'),$('.wedo_right_box'));
        /* leadership */
        scrollAni(ts,$('.leader_wrap'),$('.leader_wrap'))
        scrollAni(ts,$('.bill'),$('.bill'))
        scrollAni(ts,$('.bill_wrap>p'),$('.bill_wrap>p'))
        /* location */
        scrollAni(ts,$('.location_map'),$('.location_map'))
        scrollAni(ts,$('.location_text_box'),$('.location_text_box'))
    });
$('.navi>ul>li>a').click(function(){
        $('.navi>ul>li>a').removeClass('ani')
        $(this).addClass('ani')
    })



    function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(a).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }



});
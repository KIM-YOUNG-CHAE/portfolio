$(document).ready(function(){

/* click_ani */
    $('a[href="#"]').click(function(e) {
			e.preventDefault();
	});
	
    $('.visual').addClass('ani');
    
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

    $('.day_main_con1:not(:first)').hide();
    $('.day_position_con1:not(:first)').hide();
    
    $('.day_bottom_event>ul>li>a').click(function(e){
        e.preventDefault();
        
        var title = $(this).attr('data');
        $('.day_wrap>p').text(title);
        $('.day_bottom_event>ul>li>a').css({'color':'#000'});
        $(this).css({'color':'#ff9900','transition':'0.3s ease'});

        n = $(this).parent().index();
        if(n==3){
            
        }else{
            $('.day_main_con').hide();
            $('.day_main_con').eq(n).show(1);
            $('.day_position_con').hide();
            $('.day_position_con').eq(n).show(1);
            return false
        }
     
        
    });
/* click_ani_end--------------------------------------- */
/* preloading */
    function preloading (imageArray) {
        let n = imageArray.length;
        for (let i = 0; i < n; i++) {
            let img = new Image(); 
            img.src = imageArray[i]; 
        } 
    } 
    
    preloading([ '../img/main_visual.png', '../img/day_main01.jpg','../img/day_main02.jpg','../img/day_main03.jpg', '../img/day_sub01_01.jpg','../img/day_sub02_01.jpg','../img/day_sub03_01.jpg' ,'../img/logo.png','../img/crew01_black.jpg','../img/crew02_black.jpg','../img/crew03_black.jpg','../img/crew01.jpg','../img/crew02.jpg','../img/crew03.jpg'])
/* preloading_end --------------------------------------- */

/* haderscroll */
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
/* haderscroll_end ------------------------------------*/

/* scrollAni */
        /* about */
        scrollAni(ts,$('.about_left'),$('.about_left'));
        scrollAni(ts,$('.about_right'),$('.about_right'));
        scrollAni(ts,$('.about_text_box'),$('.about_text_box'));
        /* galleries */
        scrollAni(ts,$('.gall_second>.et_box'),$('.et_box'));
        scrollAni(ts,$('.gall_first'),$('.gall_first_box'));
        scrollAni(ts,$('.gall_text_box'),$('.gall_text_box'));
        scrollAni(ts,$('.gall_second'),$('.gall_second'));
        /* day */   
        scrollAni(ts,$('.day_wrap>p'),$('.day_wrap>p'));
        scrollVivus(ts,'.day_wrap>h2',sv1,$('.st0'));
        /* plan */
        scrollAni(ts,$('.plan_left'),$('.plan_left>.thumbnail'));
        scrollAni(ts,$('.plan_left>h3'),$('.plan_left>h3'));
        scrollAni(ts,$('.plan_left>h3'),$('.plan_left>.btn'));
        scrollAniAdd(ts,$('.plan_right'),$('.plan_right'));

        /* crew */
        var $crew_list01 = $('.crew_list>li:nth-child(1)');
   
        scrollAni(ts,$('#crew>h2'),$('#crew>h2'));
        scrollAni(ts,$crew_list01,$('.crew_list>li:nth-child(1)'));
        scrollAni(ts,$crew_list01,$('.crew_list>li:nth-child(2)'));
        scrollAni(ts,$crew_list01,$('.crew_list>li:nth-child(3)'));
        scrollAni(ts,$('#crew>.ct_box'),$('#crew>.ct_box'));

        /* our */
        scrollVivus(ts,'.opa_box>h2',sv2,$('.st1'));
        scrollAniAdd(ts,$('#our'),$('.our_bg'));
    });

    
    function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(a).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }

    function scrollAniAdd(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(a).height()/1.2){
            c.addClass('ani');
        }
    }  
/* scrollAni_end------------------------------------------ */
       
/* vivus */
    var sv1 = new Vivus('day_motion',{type:'delayed', duration:150});
    var sv2 = new Vivus('opa_motion',{type:'delayed', duration:100});

    function scrollVivus(a,b,c,d){
        if(a.scrollTop() > $(b).offset().top - $(a).height()){
            c.play();
            d.addClass('fill');
        }else{
            c.reset();
            d.removeClass('fill');
        }
    }
/* vivus_end----------------------------------------------------------*/

/* swiper slider */
    var swiper = new Swiper(".mySwiper", {
            pagination: {
            slidesPerView: 1,
            spaceBetween: 14,
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween: 14,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 38,
            },
            1440:{
                slidesPerView: 4,
                spaceBetween: 38,
            }
        }
    });
/* swiper slider_end--------------------------------------------- */
});








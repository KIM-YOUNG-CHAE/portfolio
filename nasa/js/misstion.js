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
    /* ABOUT */
        /* about */
        scrollAni(ts,$('.artemis_box'),$('.artemis_box'));
        scrollAni(ts,$('.artemis_box'),$('.artemis_box h2'));
        scrollAni(ts,$('.artemis_box'),$('.artemis_box p'));
        /* mi_list */
        scrollAni(ts,$('.mi_list>li:nth-child(1)'),$('.mi_list>li:nth-child(1)'));
        scrollAni(ts,$('.mi_list>li:nth-child(4)'),$('.mi_list>li:nth-child(4)'));
        scrollAni(ts,$('.mi_list>li:nth-child(4)'),$('.mi_list>li:nth-child(4)>div'));
        scrollAni(ts,$('.mi_list>li:nth-child(2)'),$('.mi_list>li:nth-child(2)'));
        scrollAni(ts,$('.mi_list>li:nth-child(3)'),$('.mi_list>li:nth-child(3)'));
        /* mars */
        scrollAni(ts,$('.rip>h2'),$('.rip'));
  
});

    function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(a).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }

/*Ripples 플러그인*/
$('.rip').ripples({
	resolution: 450,
	dropRadius: 14,
	perturbance: 0.02,
});


});
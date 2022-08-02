$(document).ready(function(){
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
        /* wedo */
        scrollAni(ts,$('.wedo_text_box'),$('.wedo_text_box'));
        scrollAni(ts,$('.wedo_left'),$('.wedo_left'));
        scrollAni(ts,$('.wedo_right_box'),$('.wedo_right_box'));
        /* leadership */
        scrollAni(ts,$('.leader_wrap'),$('.leader_wrap'));
        scrollAni(ts,$('.bill'),$('.bill'));
        scrollAni(ts,$('.bill_wrap>p'),$('.bill_wrap>p'));
        /* location */
        scrollAni(ts,$('.location_map'),$('.location_map'));
        scrollAni(ts,$('.location_text_box'),$('.location_text_box'));

});

    function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(a).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }

      

});
$(document).ready(function(){
	
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();	
		var wds = $(this);
		
		if(scroll_top>=$('.field_section').offset().top-100){
			$('.main_nav').addClass('navion');
		}else{
			$('.main_nav').removeClass('navion');
		}
		if(scroll_top>=$('.field_section').offset().top-100){
			$('.navi').addClass('navion');
		}else{
			$('.navi').removeClass('navion');
		}
		if(scroll_top>=$('.field_section').offset().top-100){
			$('.header_btn').addClass('navion');
		}else{
			$('.header_btn').removeClass('navion');
		}
		
		
		
		
		var $shopping = $('.shopping');
		var $shopping_list= $('.shopping_list>li');
		var $guest = $('.guest');
		var $guest_02 = $('.guest_02');
		
		var $online = $('.online')
		var $online_list_wrap = $('.online_list_wrap')
		var $am = $('.am')
		var $am_list = $('.am_list_wrap')
		
		
		
		
		/*shopping*/
		scrollAni(wds,$shopping,$('.shopping'));
		scrollAni(wds,$shopping_list,$('.shopping_list'));
		/*guest*/
		scrollAni(wds,$guest,$('.guest_text_box'));
		scrollAni(wds,$guest_02,$('.guest_text_box_02'));
		/*online*/
		scrollAni(wds,$online,$('.online'));
		scrollAni(wds,$online_list_wrap,$('.online_list_wrap'));
		/*am*/
		scrollAni(wds,$am,$('.am'));
		scrollAni(wds,$am_list,$('.am_list_wrap'));
		
		return false;

	});
		$('.field_section').addClass('ani');
		$('.field_top_text').addClass('ani');
	$('.main_nav>li').eq(2).find('a').css({'font-weight':'bold'});
	
	
	function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(this).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }
	
});
	
	

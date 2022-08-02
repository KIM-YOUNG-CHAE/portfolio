$(document).ready(function(){
	
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();	
		var wds = $(this);
		
		if(scroll_top>=$('.pro_section').offset().top-100){
			$('.main_nav').addClass('navion');
		}else{
			$('.main_nav').removeClass('navion');
		}
		if(scroll_top>=$('.pro_section').offset().top-100){
			$('.navi').addClass('navion');
		}else{
			$('.navi').removeClass('navion');
		}
		if(scroll_top>=$('.pro_section').offset().top-100){
			$('.header_btn').addClass('navion');
		}else{
			$('.header_btn').removeClass('navion');
		}
		
		
		
		
		var $list01 = $('.list_01')
		var $list02 = $('.list_02')
		var $list03 = $('.list_03')
		var $list04 = $('.list_04')
		var $list05 = $('.list_05')
		var $list06 = $('.list_06')
		/*h*/
		
		scrollAni(wds,$list01,$('.list_01'));
		scrollAni(wds,$list02,$('.list_02'));
		scrollAni(wds,$list03,$('.list_03'));
		scrollAni(wds,$list04,$('.list_04'));
		scrollAni(wds,$list05,$('.list_05'));
		scrollAni(wds,$list06,$('.list_06'));
		
		
		
		
		
		
		return false;

	});
			$('.pro_section').addClass('ani');
			
	$('.main_nav>li').eq(1).find('a').css({'font-weight':'bold'});
	
	
	function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(this).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }
	
});
	
	

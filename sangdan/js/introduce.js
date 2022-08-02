$(document).ready(function(){
	
	$('.intro_section').addClass('ani');
	
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();	
		var wds = $(this);
		var $intro_section_H = $('.intro_section>h2');
		var $introTop = $('.intro_top_text>p');
		var $introTH = $('.intro_top_text>h3');
		
		var $introC = $('.intro_center')
		
		var $introBottom = $('.intro_bottom_text>p');
		var $introBH = $('.intro_bottom_text>h3');
		
		if(scroll_top>=$('.intro_section').offset().top-100){
			$('.main_nav').addClass('navion');
		}else{
			$('.main_nav').removeClass('navion');
		}
		if(scroll_top>=$('.intro_section').offset().top-100){
			$('.navi').addClass('navion');
		}else{
			$('.navi').removeClass('navion');
		}
		if(scroll_top>=$('.intro_section').offset().top-100){
			$('.header_btn').addClass('navion');
		}else{
			$('.header_btn').removeClass('navion');
		}
		
       
		
		
		/*top*/
		scrollAni(wds,$introTop,$('.intro_top_text'));
		scrollAni(wds,$introTH,$('.intro_top_text'));
		/*center*/
		scrollAni(wds,$introC,$('.intro_center'))
		/*bottom*/
		scrollAni(wds,$introBottom,$('.intro_bottom_text'));
		scrollAni(wds,$introBH,$('.intro_bottom_text'));
		return false;
	});
			if($(window).width()<760){
				$('.intro_section').addClass('ani');
				$('.intro_top_text').addClass('ani');
			}
	$('.main_nav>li').eq(0).find('a').css({'font-weight':'bold'});
	
	
	function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(this).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }
	
});
	
	

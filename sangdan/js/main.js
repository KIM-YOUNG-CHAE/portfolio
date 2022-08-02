$(document).ready(function(){
		
	/**/
		$('a[href="#"]').click(function(e) {
			e.preventDefault();
		});
		
		$('#nav_toggle').click(function(e){
			
			e.preventDefault()
			$('.menu_btn').toggleClass('active');
			$('.navi').animate({width:'toggle'},400)
		
		})
		$(window).resize(function(){
			if($(window).width()>768){
				$('.navi').css({'display':'block'})
			}else{
				$('.navi').css({'display':'none'})
			}
		})
		
	
		$(".visual_text_box").addClass("ani");
		$(".navi").addClass("ani");
	
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();	
		var wds = $(this);
       
		
   
		
		if(scroll_top>=$('.business').offset().top-100){
			$('.main_nav').addClass('navion');
		}else{
			$('.main_nav').removeClass('navion');
		}
		if(scroll_top>=$('.business').offset().top-100){
			$('.navi').addClass('navion');
		}else{
			$('.navi').removeClass('navion');
		}
		
		if(scroll_top>=$('.with').offset().top-100){
			$('.main_nav').addClass('navion_w');
		}else{
			$('.main_nav').removeClass('navion_w');
		}
		if(scroll_top>=$('.business').offset().top-100){
			$('.header_btn').addClass('navion');
		}else{
			$('.header_btn').removeClass('navion');
		}
		
		if(scroll_top>=$('.with').offset().top-100){
			$('.main_nav').addClass('navion_w');
		}else{
			$('.main_nav').removeClass('navion_w');
		}
		if(scroll_top>=$('.with').offset().top-100){
			$('.navi').addClass('navion_w');
		}else{
			$('.navi').removeClass('navion_w');
		}
		
		
		
		var $business = $('#business');
		
		
		var $businessList01 = $('#business .mo_01');
		var $businessList02 = $('#business .mo_02');
		var $businessList03 = $('#business .mo_03');
		var $businessList04 = $('#business .mo_04');
        var $introduce = $('#introduce');
        var $with = $('#with');
		//business
		scrollAni(wds,$business,$('.business'));
		
		scrollAni(wds,$businessList01,$('.mo_01'));
		scrollAni(wds,$businessList02,$('.mo_02'));
		scrollAni(wds,$businessList03,$('.mo_03'));
		scrollAni(wds,$businessList04,$('.mo_04'));
		//intro
		scrollAni(wds,$introduce,$('.introduce'));
		/*with*/
		scrollAni(wds,$with,$('.with'));

		return false;
	});
			if($(window).width()<760){
				$('.business').addClass('ani');
				$('.business_list').addClass('ani');
				$('.mo_01').addClass('ani');
			}
	
	function scrollAni(a,b,c){
        if(a.scrollTop() > $(b).offset().top - $(this).height()/1.1){
            c.addClass('ani');
        }else{
            c.removeClass('ani');
        }
    }
	
	
	
	
	
	

});
	
	

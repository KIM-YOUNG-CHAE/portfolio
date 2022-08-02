/*nav*/
$(function(){
	
	$('a[href="#"]').click(function(e) {
			e.preventDefault();
		});
	
    $('#nav_toggle').click(function(e){
		e.preventDefault()
		$('.navi,.menu_btn').toggleClass('active');
        $('.navi').fadeToggle(300);
	})
	return false;
});
 		$(function(){
            var n=0,
                rolling;
            function gotoslide(index){
                if(n===index) return false;
                var nslide=$('.event_slider li').eq(n);
                var nextslide=$('.event_slider li').eq(index);
                $(nslide).css({'left':'0%'}).stop().animate({'left':'-100%'},1000);
                $(nextslide).css({'left':'100%'}).stop().animate({'left':'0%'},1000);
                n=index;
            }
            function autoslide(){
                rolling=setInterval(function(){
                    var nextindex=(n+1)%4;
                    gotoslide(nextindex);
                    $('.slider_btn li').removeClass('on');
					$('.slider_btn li:eq('+n+')').addClass('on');
                },3000)
            }
            /*function stopslide(){
                clearInterval(rolling)
            }
            $('.event_slider>li').on({
                'mouseenter':stopslide,
                'mouseleave':autoslide
            })*/
            
            $('.slider_btn li').click(function(e){
                e.preventDefault();
                gotoslide($(this).index());
                $('.slider_btn li').removeClass('on');
                $('.slider_btn li:eq('+n+')').addClass('on');
            })
            $('.next').click(function(e){
                e.preventDefault();
                if(n===3){
                    gotoslide(n);
                }else{
                    gotoslide(n+1);
                }
            })
            $('.prev').click(function(e){
                e.preventDefault();
                if(n===0){
                    gotoslide(n);
                }else{
                    gotoslide(n+ -1);
                }          
            })
			
            autoslide();
        })
    
/*about*/
	
	$(window).scroll(function(){
        	var scroll_top = $(this).scrollTop();
			
			/*about_01*/
			
			
	/*	var wds = $(this);
			var $visual = $('.visual')
			ani(wds,$visual,$('.visual'))
			
			function ani(a,b,c){
				if(a.scrollTop() > $(b).offset().top - $(this).height()/1.1){
						c.addClass('ani')
				   }else{
						c.removeClass('ani')
				   }
			}*/
		
			if(scroll_top>= $('.about_01_right').offset().top-$(this).height()){
			   $('.about_01_right').addClass('ani');
			}else{
				$('.about_01_right').removeClass('ani');
			}
		
			if(scroll_top>= $('.about_02_left').offset().top-$(this).height()){
			   $('.about_02_left').addClass('ani');
			}else{
				$('.about_02_left').removeClass('ani');
			}
		
			if(scroll_top>= $('.about_01_left').offset().top-$(this).height()){
			   $('.about_01_left').addClass('ani');
			}else{
				$('.about_01_left').removeClass('ani');
			}
			/*about_02*/
			if(scroll_top>= $('.about_02_right').offset().top-$(this).height()){
			   $('.about_02_right').addClass('ani');
			}else{
				$('.about_02_right').removeClass('ani');
			}
		
			/*bath*/
			if(scroll_top>= $('.bath_sakura .bath_bomb').offset().top-$(this).height()){
			   $('.bath_sakura .bath_bomb').addClass('ani');
			}else{
				$('.bath_sakura .bath_bomb').removeClass('ani');
			}
		
			if(scroll_top>= $('.bath_inter .bath_bomb').offset().top-$(this).height()){
			   $('.bath_inter .bath_bomb').addClass('ani');
			}else{
				$('.bath_inter .bath_bomb').removeClass('ani');
			}
		
			if(scroll_top>= $('.bath_sex .bath_bomb').offset().top-$(this).height()){
			   $('.bath_sex .bath_bomb').addClass('ani');
			}else{
				$('.bath_sex .bath_bomb').removeClass('ani');
			}
		
			/*body*/
			if(scroll_top>= $('.body_spray').offset().top-$(this).height()){
			   $('.body_spray').addClass('ani');
			}else{
				$('.body_spray').removeClass('ani');
			}
		
			if(scroll_top>= $('.body_spray').offset().top-$(this).height()){
			   	$('.body_list li').addClass('ani');
			}else{
				$('.body_list li').removeClass('ani');
			}
			/*spa*/
			if(scroll_top>= $('.spa_main').offset().top-$(this).height()){
			   	$('.spa_main').addClass('ani');
			}else{
				$('.spa_main').removeClass('ani');
			}
			/*event*/
			
			/*shop*/
			if(scroll_top>= $('.shop_main').offset().top-$(this).height()){
			   	$('.shop_main').addClass('ani');
			}else{
				$('.shop_main').removeClass('ani');
			}
		
			if($(window).width()>1300){
				if(scroll_top>= $('.body_spray').offset().top-$(this).height()){
			   	$('.body_list li').addClass('ani_body');
				}else{
				$('.body_list li').removeClass('ani_body');
				}
			}
    });
		

		
	
















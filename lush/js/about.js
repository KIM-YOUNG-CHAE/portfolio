
		
 			$(window).scroll(function(){
				var scroll_top = $(this).scrollTop();
			/*sub_about*/
				/*cosmatic*/
					if(scroll_top>= $('.cosmatic_left').offset().top-$(this).height()){
						$('.cosmatic_left').addClass('ani');
					}else{
						$('.cosmatic_left').removeClass('ani');
					}
					if(scroll_top>= $('.cosmatic_right').offset().top-$(this).height()){
						$('.cosmatic_right').addClass('ani');
					}else{
						$('.cosmatic_right').removeClass('ani');
					}
				/*lush_life*/
					if(scroll_top>= $('.lush_life').offset().top-$(this).height()){
						$('.lush_life').addClass('ani');
					}else{
						$('.lush_life').removeClass('ani');
					}
				/*material*/
					if(scroll_top>= $('.material_left').offset().top-$(this).height()){
						$('.material_left').addClass('ani');
					}else{
						$('.material_left').removeClass('ani');
					}
					if(scroll_top>= $('.material_right').offset().top-$(this).height()){
						$('.material_right').addClass('ani');
					}else{
						$('.material_right').removeClass('ani');
					}
				/*wellbeing*/
				if(scroll_top>= $('.wellbeing_life').offset().top-$(this).height()){
						$('.wellbeing_life').addClass('ani');
					}else{
						$('.wellbeing_life').removeClass('ani');
					}
		 });
		
	
















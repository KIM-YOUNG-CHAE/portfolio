
		
 			$(window).scroll(function(){
				var scroll_top = $(this).scrollTop();
				/*sub_about*/
				/*bath_title*/
					if(scroll_top>= $('.bath_title').offset().top-$(this).height()){
						$('.bath_title').addClass('ani');
					}else{
						$('.bath_title').removeClass('ani');
					}
				/*bath_bomb*/
					if(scroll_top>= $('.bath_bomb_visual').offset().top-$(this).height()){
						$('.bath_bomb_visual').addClass('ani');
					}else{
						$('.bath_bomb_visual').removeClass('ani');
					}
					if(scroll_top>= $('.bath_bomb_text').offset().top-$(this).height()){
						$('.bath_bomb_text').addClass('ani');
					}else{
						$('.bath_bomb_text').removeClass('ani');
					}
				/*bubble_bar*/
					if(scroll_top>= $('.bubble_bar_visual').offset().top-$(this).height()){
						$('.bubble_bar_visual').addClass('ani');
					}else{
						$('.bubble_bar_visual').removeClass('ani');
					}
					if(scroll_top>= $('.bubble_bar_text').offset().top-$(this).height()){
						$('.bubble_bar_text').addClass('ani');
					}else{
						$('.bubble_bar_text').removeClass('ani');
					}
				/*bath_title*/
					if(scroll_top>= $('.body_title').offset().top-$(this).height()){
						$('.body_title').addClass('ani');
					}else{
						$('.body_title').removeClass('ani');
					}
				/*body_spray*/
					if(scroll_top>= $('.body_spray_visual').offset().top-$(this).height()){
						$('.body_spray_visual').addClass('ani');
					}else{
						$('.body_spray_visual').removeClass('ani');
					}
					if(scroll_top>= $('.body_spray_text').offset().top-$(this).height()){
						$('.body_spray_text').addClass('ani');
					}else{
						$('.body_spray_text').removeClass('ani');
					}
				/*body_clean*/
					if(scroll_top>= $('.body_clean_visual').offset().top-$(this).height()){
						$('.body_clean_visual').addClass('ani');
					}else{
						$('.body_clean_visual').removeClass('ani');
					}
					if(scroll_top>= $('.body_clean_text').offset().top-$(this).height()){
						$('.body_clean_text').addClass('ani');
					}else{
						$('.body_clean_text').removeClass('ani');
					}
				/*thorough*/
					if(scroll_top>= $('.thorough').offset().top-$(this).height()){
						$('.thorough').addClass('ani');
					}else{
						$('.thorough').removeClass('ani');
					}
		 });
		
	

















		
 			$(window).scroll(function(){
				var scroll_top = $(this).scrollTop();
				/*sub_spa*/
					/*lush_spa*/
					if(scroll_top>= $('.lush_spa_text').offset().top-$(this).height()){
						$('.lush_spa_text').addClass('ani');
					}else{
						$('.lush_spa_text').removeClass('ani');
					}
					if(scroll_top>= $('.lush_spa .lush_spa_1').offset().top-$(window).height()){
						$('.lush_spa .lush_spa_1').addClass('ani');
					}else{
						$('.lush_spa .lush_spa_1').removeClass('ani');
					}
					if(scroll_top>= $('.lush_spa .lush_spa_2').offset().top-$(window).height()){
						$('.lush_spa .lush_spa_2').addClass('ani');
					}else{
						$('.lush_spa .lush_spa_2').removeClass('ani');
					}
					/*tratments*/
					if(scroll_top>= $('.trat_01').offset().top-$(this).height()){
						$('.trat_01').addClass('ani');
					}else{
						$('.trat_01').removeClass('ani');
					}
					if(scroll_top>= $('.trat_02').offset().top-$(this).height()){
						$('.trat_02').addClass('ani');
					}else{
						$('.trat_02').removeClass('ani');
					}
					if(scroll_top>= $('.trat_03').offset().top-$(this).height()){
						$('.trat_03').addClass('ani');
					}else{
						$('.trat_03').removeClass('ani');
					}
					if(scroll_top>= $('.trat_04').offset().top-$(this).height()){
						$('.trat_04').addClass('ani');
					}else{
						$('.trat_04').removeClass('ani');
					}
					
					/*music*/
					if(scroll_top>= $('.music_01').offset().top-$(this).height()){
						$('.music_01').addClass('ani');
					}else{
						$('.music_01').removeClass('ani');
					}
					if(scroll_top>= $('.music_02').offset().top-$(this).height()){
						$('.music_02').addClass('ani');
					}else{
						$('.music_02').removeClass('ani');
					}
					if(scroll_top>= $('.music_03').offset().top-$(this).height()){
						$('.music_03').addClass('ani');
					}else{
						$('.music_03').removeClass('ani');
					}
					if(scroll_top>= $('.music_list li').offset().top-$(this).height()){
						$('.music_list li').addClass('ani');
					}else{
						$('.music_list li').removeClass('ani');
					}
					/*find*/
					if(scroll_top>= $('.find').offset().top-$(this).height()){
						$('.find').addClass('ani');
					}else{
						$('.find').removeClass('ani');
					}
				
				if($(window).width()>1300){
					if(scroll_top>= $('.music_list').offset().top-$(this).height()){
						$('.music_list li').addClass('ani');
					}else{
						$('.music_list li').removeClass('ani');
					}
				}
				
		 });
		
	
















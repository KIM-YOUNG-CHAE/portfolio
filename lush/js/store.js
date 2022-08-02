
		
 			$(window).scroll(function(){
				var scroll_top = $(this).scrollTop();
					
				if(scroll_top>= $('.store_1').offset().top-$(this).height()){
						$('.store_1').addClass('ani');
					}else{
						$('.store_1').removeClass('ani');
				}
				if(scroll_top>= $('.store_2').offset().top-$(this).height()){
						$('.store_2').addClass('ani');
					}else{
						$('.store_2').removeClass('ani');
				}
				if(scroll_top>= $('.store_3').offset().top-$(this).height()){
						$('.store_3').addClass('ani');
					}else{
						$('.store_3').removeClass('ani');
				}
				if(scroll_top>= $('.store_4').offset().top-$(this).height()){
						$('.store_4').addClass('ani');
					}else{
						$('.store_4').removeClass('ani');
				}
				if(scroll_top>= $('.store_5').offset().top-$(this).height()){
						$('.store_5').addClass('ani');
					}else{
						$('.store_5').removeClass('ani');
				}
		
			});

      "use strict";
      let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
            lat: -34.397,
            lng: 150.644
          },
          zoom: 8
        });
      }
	
		$(function(){
			$('.shop_list').click(function(e){
				e.preventDefault();
				var title= $(this).children('p').children('a').attr('title')
				var data= $(this).children('p').children('a').attr('data-t')
				$('#shop').val(title)
				$('#tel').val(data)
				
			})
		})

 






		
	
















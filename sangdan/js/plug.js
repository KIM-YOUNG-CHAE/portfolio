$(document).ready(function(){
/* 모바일 맞추어놓음*/
		var swiper = new Swiper('.swiper-container', {

        slidesPerView: 2,
        slidesPerColumn: 3,
        paginationClickable: true,
        spaceBetween:-25,
		
			autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
				delay : 3000,   // 시간 설정
  				disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
			},
    });

/*with 카운트*/
	$('.counter').counterUp({
    	delay: 20,
		time: 1000
	});
	/*with 카운트 end*/
});
$(document).ready(function(){

	
$(function(){
	$('.shout').mouseenter(function(){
		if($(window).width()>1300){
			$('.shout').css({'background':'none'});
			$('.shout>span').stop().animate({'width':'328px','background-color':'#e0e0e0'});
			$('.shout>span>a').stop().animate({'color':'#232323;'});
		}
	});
	
	$('.shout').mouseleave(function(){
		$('.shout>span').stop().animate({'width':'100%','background-color':'#c92200'});
		$('.shout>span>a').stop().animate({'color':'#e6e2dd;'});
	});
})

	$(function(){
		$('.navi>li>a').click(function(e){
			e.preventDefault();
			var link=$(this).attr('href');
			var high=$(link).offset().top;
		
			$('html,body').animate({'scroll-top':high})
		
			
		})
	})

/*패럴렉스*/
	
$(window).scroll(function(){
	var scroll_top = $(this).scrollTop();	
	var ts = $(this);
	
	if(scroll_top>=$('#visual').offset().top){
		$('.navi>li>a').removeClass('on')
		$('.navi>li>a').eq(0).addClass('on');
	}
	if(scroll_top>=$('#work').offset().top){
		$('.navi>li>a').removeClass('on')
		$('.navi>li>a').eq(1).addClass('on');

	}
	if(scroll_top>=$('#contact').offset().top-$(this).height()/1.1){
		$('.navi>li>a').removeClass('on')
		$('.navi>li>a').eq(2).addClass('on');	
	}
	
	if(scroll_top>=$('.skill').offset().top-$(this).height()){
		$('.work>h2').addClass('ani');
	}
	if(scroll_top>=$('.skill_list>li').eq(3).offset().top-$(this).height()){
		$('.skill>h3').addClass('ani');
	}
	
	for(i=0;i<=8;i++){
		if(scroll_top>=$('.skill_list>li').eq(3).offset().top-$(this).height()){
			$('.skill_list>li').eq(i).addClass('ani');
		}
	}
    /*nasa*/
    var $nasa_visual = $('.nasa_visual');
    var $nasa_skill = $('.nasa_skill');
    scrollAni(ts,$nasa_visual,$('.nasa>h2'));
    scrollAni(ts,$nasa_visual,$('.nasa_pc_visual'));
    scrollAni(ts,$nasa_visual,$('.nasa_mobile_visual'));
    scrollAni(ts,$nasa_skill,$('.nasa_skill'));
    scrollAni(ts,$nasa_skill,$('.nasa_color'));
    scrollAni(ts,$nasa_skill,$('.nasa>.view'));
    /*nasa_end*/
	/*lush*/
	
	var $lush_visual = $('.lush_visual');
	var $lush_skill = $('.lush_skill');
	
	scrollAni(ts,$lush_visual,$('.lush>h2'));
	scrollAni(ts,$lush_visual,$('.lush_pc_visual'));
	scrollAni(ts,$lush_visual,$('.lush_mobile_visual'));
	scrollAni(ts,$lush_skill,$('.lush_skill'));
	scrollAni(ts,$lush_skill,$('.lush_color'));
	scrollAni(ts,$lush_skill,$('.lush>.view'));
	/*lush_end*/
	
	/*subway_end*/
	var $sangdan_visual = $('.sangdan_visual');
	var $sangdan_skill = $('.sangdan_skill');
	
	scrollAni(ts,$sangdan_visual,$('.sangdan>h2'));
	scrollAni(ts,$sangdan_visual,$('.sangdan_pc_visual'));
    scrollAni(ts,$sangdan_visual,$('.sangdan_mobile_visual'));
	scrollAni(ts,$sangdan_skill,$('.sangdan_skill'));
	scrollAni(ts,$sangdan_skill,$('.sangdan_color'));
	scrollAni(ts,$sangdan_skill,$('.sangdan>.view'));
	/*sangdan_end*/

	/*subway*/
	var $subway_visual = $('.subway_visual');
	var $subway_skill = $('.subway_skill');
	scrollAni(ts,$subway_visual,$('.subway>h2'));
	scrollAni(ts,$subway_visual,$('.subway_pc_visual'));
	scrollAni(ts,$subway_skill,$('.subway_skill'));
	scrollAni(ts,$subway_skill,$('.subway_color'));
	scrollAni(ts,$subway_skill,$('.subway>.view'));
	/* subway_end */

	/* contact */
	var $contact = $('.contact');

	scrollAni(ts,$contact,$('.contact>h2'));
	scrollAni(ts,$contact,$('.circle'));
	/* contact_end */
});

function scrollAni(a,b,c){
	if(a.scrollTop() > $(b).offset().top - $(a).height()){
		c.addClass('ani');
	}else{
		c.removeClass('ani');
	}
}
	
/* vivus */
var svg = new Vivus('motion', {duration: 200}, function(){
	$('#motion').find('.st0').addClass('fill')
});

});











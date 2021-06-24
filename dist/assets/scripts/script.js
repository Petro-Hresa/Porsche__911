
$(document).ready(function(){
	// Function adaptive page
	
	$( window ).on("resize", adaptive)
		
	adaptive()
		
	function adaptive(){

		if($(".header").height()){
			let navPaddingTop =  $(".header").innerHeight() + 20;
			$(".nav").css({"padding-top": navPaddingTop +"px"})
		}

		if($(window).width() <= 1200 ){
			$(".details").prepend($(".slider"))

			if($(window).width() <= 768){
			$('.slider').append( $('.details__arrows'))
			}
		}
		
		if($(window).width() >= 1200 ){
				$(".details").append($(".slider"))
		}

		if($(window).width() <= 992 )$('.nav__list').prepend($(".sorch"))
		else $('.header__items').prepend($(".sorch"))


	
	}


    //Function Sorch 
	$('.sorch__wrap-img').click(function(){
		$('.sorch__input').css({ 
			"opacity":"1",
			"flex":"1 1 auto",
		})
		$('.sorch__input').focus();
	})

	$('.sorch__input').blur(function(){
		$('.sorch__input').css({
			"opacity":"0",
			"flex":"0 0",
		})
	})

	
    //Function manu burger
	$('.manu').click(function(){
		$(".manu__burger").toggleClass('manu__burger_active');
		$(".nav").toggleClass('nav_active');
	})




	$('.details__button').click(function(){
		$('.details__read-more').toggleClass('read-more');

		if($('.details__read-more').hasClass('read-more') && $(window).width() >= 1200 ){

		$('.images__wrap-slider').append($('.slider__inner').addClass("slider__read-more"));
		$('.slider').css({"height":"7px"})
		$('.details__arrows').css({"display":"none"})
		$('.details__title').css({'font-size': "35px" , "transition": "none"})

	}else{
		$('.slider').append($('.slider__inner').removeClass("slider__read-more"));
		$('.slider').css({"height":"155px"})
		$('.details__arrows').css({"display":"flex"})
		$('.details__title').css({'font-size': "" , "transition": "none"})
	}
	})







	if($(window).width() <= 1200 ){
		$(".details").prepend($(".slider"))
	}

	if($(window).width() >= 1200 ){
			$(".details").append($(".slider"))
	}

	if($(window).width() <= 768){
		$('.slider').append( $('.details__arrows'))
	}

	

	

/*Slider*/
$(".details__arrow_next").parent('.details__wrap-arrow').click(function(){
     let currentImg = $(".slider__item_active");
     let nextImg = currentImg.next(".slider__item");
	   if(nextImg.length){
	   	currentImg.removeClass("slider__item_active");
	   	nextImg.addClass("slider__item_active");
	   	$(".images__img").attr("src", $(".slider__item_active >img").attr('src'));

	   }
})


$(".details__arrow_pre").parent('.details__wrap-arrow').click(function(){
     let currentImg = $(".slider__item_active");
     let prevImg = currentImg.prev(".slider__item");
	   if(prevImg.length){
	      $(".slider__item").removeClass("slider__item_active");
         prevImg.addClass("slider__item_active");
         $(".images__img").attr("src", $(".slider__item_active >img").attr('src'));
	   }
})

$(".slider__item").click(function(){
	      $(".slider__item").removeClass("slider__item_active");
         $(this).addClass("slider__item_active");
         $(".images__img").attr("src", $(".slider__item_active >img").attr('src'));
})

});

   

window.onscroll = function (){
    console.log(window.pageYOffset)
    
    // if(window.pageYOffset > 0){
    //     querSell('.head').classList.add('head_fixed')
    // }

}
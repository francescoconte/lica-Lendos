		$(document).ready(function() {
            var clickneSlider = 0;
            
            
        $(".stick").click(function() {
            
            if (clickneSlider == 0) {
             $("#slide1").fadeOut(1000);    
             $("#slide2").fadeIn(1000);    
              clickneSlider = 1;  
                
            } else {
            
            $("#slide2").fadeOut(1000);    
            $("#slide1").fadeIn(1000);    
            clickneSlider = 0; 
            
            
        }
            
            
            
        });  
            
            
            
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });            
      $(".regular2").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

            

	$("nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
  
            
            
             });       


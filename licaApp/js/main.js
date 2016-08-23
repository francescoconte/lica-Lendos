		$(document).ready(function() {
            
            var widthDevice = $(window).width();
            
            if (widthDevice >= 1200) {
                
                        
			$('#fullpage').fullpage({
				anchors: ['start-info', 'about-info', 'reader-info', 'author-info', 'brand-info', 'social-info', 'contact-info'],
				menu: '#menu',
				scrollingSpeed: 1000});
           
            }
            
             });       


$(window).load(function () {
  $('#logo').fadeIn(1000);   
  $('#timer').delay(1000).fadeIn(1000); 
  $('#hello').addClass('hello');
  $('#hello-d').addClass('hello2');
  $('#hello-scr').addClass('hello3');
  $('#navigate1').delay(4500).fadeIn(1000);
});



$(new Image()).attr('src', 'img/home.jpg').load(function() {});
$(new Image()).attr('src', 'img/about.jpg').load(function() {});
$(new Image()).attr('src', 'img/author.jpg').load(function() {});
$(new Image()).attr('src', 'img/reader.jpg').load(function() {});
$(new Image()).attr('src', 'img/brand.jpg').load(function() {});
$(new Image()).attr('src', 'img/social.jpg').load(function() {});
$(new Image()).attr('src', 'img/footer.jpg').load(function() {});

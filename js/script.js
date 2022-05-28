$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});

	  $('#callback-button').click(function () {$('.modal').addClass('modal_active'); });
  $('.modal__close-button').click(function () {$('.modal').removeClass('modal_active');  });
   $('.modal').mouseup(function (e) { let modalContent = $(".modal__content"); if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
     $(this).removeClass('modal_a  ctive');
   }
 }); 
     $('form').submit(function() {
  var form = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: form.serialize(),
        beforeSend: (function(){
          $('.submit').css('color', 'transparent');
          $('.submit').addClass('progress-bar progress-bar-striped progress-bar-animated bg-warning');
        }),error: function(XMLHttpRequest, textStatus, errorThrown) {
              $('.error-data').slideDown();
            },success: (function() {
                $('.submit').css('color', 'yellow');
                $('.submit').removeClass('progress-bar progress-bar-striped progress-bar-animated bg-warning');
                $('.alrt').fadeIn();
        setTimeout(function() {
            form.trigger("reset");
        }, 2000);
    })
})
    return false;
});



	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function()
		{
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
		});
	$(document).on("click", "nav a", function(e) 
	{
		e.preventDefault();
		var id  = $(this).attr('href');
		var top = $(id).offset().top; // получаем координаты блока
		$('body, html').animate({scrollTop: top -100}, 800); // плавно переходим к блоку
	});

	  AOS.init();

});


$(window).resize(function() {
	$('.lang').css('height', ($('.header-top').height()));
	del();
});

$(document).ready(function () {
	$('.lang').css('height', ($('.header-top').height()));
	del();

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        960:{
        		items:3
        }
    }
})
});

function del() {
	var winWidth = $(window).width(),
		mdWidth = 960,
		smWidth = 650;
		xsWidth = 455;

	if(winWidth <= mdWidth) {
		$('.header-top  nav').removeClass('offset1');
	}else {
		$('.header-top  nav').addClass('offset1');
	};

	if (winWidth <= smWidth){
		$('.header-middle .caption').removeClass('offset2').addClass('offset1');
	} else {
		$('.header-middle .caption').removeClass('offset1').addClass('offset2');
	}

	if (winWidth <= xsWidth) {
		$('.footer-bottom .col-12').removeClass('col-12');
		$('.designed').addClass('col-sm-12');
		$('.copy').addClass('col-sm-12');
		$('.lang').css('height', '70');
		$('.lang-box').css('top', '70px');
} else {
		$('.footer-bottom .col-12').addClass('col-12');
		$('.designed').removeClass('col-sm-12');
		$('.copy').removeClass('col-sm-12');
	}
}

$('#producty').hover(function(){
	$('#sub-menu').css('display', 'block');
	},
	function(){
		if($('#sub-menu').mouseover()) {
			$('#sub-menu').css('display', 'none');
			//$('#producty').css('background-color', '#8C8D8D');
			}
});

	$('.lang').hover(function() {
		$('#arrow').removeClass('fa-angle-down').addClass('fa-angle-up');
		$('#arrow').css('color', '#fff');
		$(this).css('background-color', '#8C8D8D'); 
		$(this).css('height', 'inherit');
		$('.lang a').css('color', '#fff');
	},
	function() {
		$(this).css('background-color', 'inherit');
		$('.lang a').css('color', '#999');
		$('#arrow').css('color', '#999');
		$(this).css('height', ($('.header-top').height()));
		$('#arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
		del();
	});

	$('.header-nav').hover(function() {
		$('.header-nav ul').css( 'height', 'inherit' );
	}, function() {
		$('.header-nav ul').css( 'height', '73px' );
	});



				var ok = $(".comment-form .ok"),
				cancel = $(".comment-form .cancel"),
				form = $(".comment-form"),
				passComment = false,
				commentOverlay = $('.comment-overlay');

		$("#addComment").click(function() {
				commentOverlay.css({
						width: $(window).width(),
						height: $(document).height(),
						opacity: 0
				})
						.show().animate({opacity: 1}, 400);
				form.show();
				form.css({
						position: "absolute",
						top: $(window).scrollTop() + (($(window).height() - form.height()) / 2),
						left: ($(window).width() - form.width()) / 2
				});
		});

		cancel.click(function() {
				commentOverlay.animate({opacity: 0}, 400, undefined, function() {
						form.hide();
						commentOverlay.hide();
				});
		});

		ok.click(function() {
				if($('#name').val() && $('#comment_text').val()) {
						if(!passComment) {
								form.slideToggle(200, function() {
										$('.comment-form .block').hide();
										$('.comment-form h2').text('Готово');
										$('.good').show();
										form.slideToggle(400, function () {
												$('.good').animate({opacity: 1}, 400);
										});
										passComment = true;
								});
						} else {
								commentOverlay.animate({opacity: 0}, 400, undefined, function() {
										form.hide();
										commentOverlay.hide();
								});
						}
				}
		});
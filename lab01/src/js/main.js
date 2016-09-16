var vh, dh;

jQuery(document).ready(function() {
	$('#nav').onePageNav({
		scrollSpeed: 450,
		scrollThreshold: 0.3
	});
	console.log("Document ready");
	$(window).resize();
	$(window).scroll(function() {
		$('.wrap').css('background-position', '0 ' + ($(window).scrollTop()*100/($(document).height() - $(window).height())) + '%' );
		if ($(window).scrollTop() >= 180) {
			$('#sticky').css({
				'position': 'fixed',
				'margin-top': '0'
			});
		} else {
			$('#sticky').css({
				'position': 'absolute',
				'margin-top': '180px'
			});
		}
	});
});
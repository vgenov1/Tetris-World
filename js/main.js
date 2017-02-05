$(document).ready(function(){
	$('.fa-leanpub').click( function () {
			$('#test').addClass('dN');
			$('.intro-text-box').removeClass('dN');
		});

	$('.fa-play-circle').click( function () {
			$('#introSection').addClass('dN');
			$('.play-section').removeClass('dN');
			$('header').addClass('smaller-header');
		});
});
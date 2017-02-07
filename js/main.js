$(document).ready(function(){
	$('.fa-leanpub').click( function () {
			$('#howToPlay').addClass('dN');
			$('.intro-text-box').removeClass('dN');
		});

	$('.choose-level').click( function () {
			$('#chooseLevel').addClass('dN');
			$('.intro-list-box').removeClass('dN');
		});

	$('.fa-play-circle').click( function () {
			$('#introSection').addClass('dN');
			$('.play-section').removeClass('dN');
			$('header').addClass('smaller-header');
		});
});
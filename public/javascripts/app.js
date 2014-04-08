
var App = function () {
	
};

App.prototype.start = function () {
	$('#loungeLight .blob').click(function () {
		$('#loungeLight .room').fadeTo(2000, 1);
	});

	$('#switchButtons span#1').click(function () {
		$('.panel').hide();
		$('#loungeLight').show();
		$('#switchButtons span').removeClass('active');
		$(this).addClass('active');
	});

	$('#switchButtons span#2').click(function () {
		$('.panel').hide();
		$('#bedroom').show();
		$('#switchButtons span').removeClass('active');
		$(this).addClass('active');
	});

	$('#switchButtons span#3').click(function () {
		$('.panel').hide();
		$('#kitchen').show();
		$('#switchButtons span').removeClass('active');
		$(this).addClass('active');
	});

	$('#switchButtons span#4').click(function () {
		$('.panel').hide();
		$('#loungeWallpaper').show();
		$('#switchButtons span').removeClass('active');
		$(this).addClass('active');
	});
};
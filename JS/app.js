
$('.js-click').on('click', function(){
	window.location = $(this).href='start.html';
});


$('.js-upload').on('click', function(){
	window.location = $(this).href='upload.html';
});

$('.js-click').hover(function() {
    $(this).css('cursor','pointer');
    });

$('.js-upload').hover(function() {
    $(this).css('cursor','pointer');
    });
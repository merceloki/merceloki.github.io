(function($) {

$(".switch input[type='checkbox']").on('click', function() {
	if($(this).is(":checked")) {
		$(this).closest('.card-box').find('.overlay').css('display', 'block');
	}
});

$(".inner-div .visto-input").on("keyup", function() {
	var str = $(this).val().toLowerCase();

	if (str == 'visto') {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'block');
	} else {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'none');		
	}
});

})(jQuery); // Fully reference jQuery after this point.

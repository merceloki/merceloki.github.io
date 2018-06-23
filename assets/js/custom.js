(function($) {

$(".switch input[type='checkbox']").on('click', function() {
	if($(this).is(":checked")) {
		$(this).closest('.card-box').find('.overlay').css('display', 'block');
	}
});

$(".fa-close").on('click', function() {
	event.preventDefault();
	$(this).closest('.card-box').find('.overlay').css('display', 'none');
	$(".switch input[type='checkbox']").removeAttr('checked');
});

$(".inner-div .visto-input").on("keyup", function() {
	var str = $(this).val().toLowerCase();

	if (str == 'visto') {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'flex');
	} else {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'none');		
	}
});

})(jQuery); // Fully reference jQuery after this point.

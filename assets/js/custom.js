(function($) {

$(".switch input[type='checkbox']").on('click', function() {
	if($(this).is(":checked")) {
		$(this).closest('.card-box').find('.overlay').css('display', 'block');
	}
});

$(".fa-close").on('click', function(e) {
	e.preventDefault();
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


// PAS
$(".pa .switch.on input[type='checkbox']").on('click', function() {
	if($(this).is(":checked")) {
		$(this).closest('.card-box').find('.overlay').css('display', 'block');
		$(this).closest('.contact-card').css('display', 'none');
		$(this).closest('.pa').find('.switch.off input[type="checkbox"]').removeAttr('checked');
	}
}); 

$(".pa .switch.off input[type='checkbox']").on('click', function() {
	if($(this).is(":checked")) {
		$(this).closest('.card-box').find('.overlay').css('display', 'none');
		$(this).closest('.card-box').find('.contact-card').css('display', 'block');
		$(this).closest('.card-box').find('.switch').removeProp('checked');
		$(this).closest('.pa').find('.switch.on input[type="checkbox"]').removeAttr('checked');
	}
}); 


})(jQuery); // Fully reference jQuery after this point.

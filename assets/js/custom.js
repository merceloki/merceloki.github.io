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
// $(".pa .switch.on input[type='checkbox']").on('click', function() {
// 	if($(this).is(":checked")) {

// 		$(this).closest('.card-box').find('.overlay').css('display', 'block');
// 		$(this).closest('.contact-card').css('display', 'none');
// 		$(this).closest('.pa').find('.switch.off input[type="checkbox"]').removeAttr('checked');
// 		$(this).closest('.card-box').find('.overlay').css('background-color', 'white');
// 		$(".switch input[type='checkbox']").attr('checked');
// 	}
// }); 

// $(".pa .switch.off input[type='checkbox']").on('click', function() {
// 	if($(this).is(":checked")) {
// 		$(this).closest('.card-box').find('.overlay').css('display', 'none');
// 		$(this).closest('.card-box').find('.contact-card').css('display', 'block');
// 		// $(this).closest('.card-box').find('.switch').removeProp('checked');
// 		$(this).closest('.pa').find('.switch.on input[type="checkbox"]').removeAttr('checked');
// 		// console.log('lala');
// 	}

// }); 


$("#nome-pa-switch").on('click', function() {
	event.preventDefault();
	/* Act on the event */
	$(this).closest('.card-box').find('.overlay').css('display', 'block');
	$(this).closest('.contact-card').css('display', 'none');
	$(this).closest('.card-box').find('.overlay').css('background-color', 'white');
	$("#inner-nome-pa-switch").prop('checked', true);
	$(".card-box").css('border-radius', '50px');
});	

$("#inner-nome-pa-switch").on('click', function() {
	event.preventDefault();
	/* Act on the event */
	$(this).closest('.card-box').find('.overlay').css('display', 'none');
	$(this).closest('.card-box').find('.contact-card').css('display', 'block');
	$("#nome-pa-switch").removeAttr('checked');
	$(".card-box").css('border-radius', '20px');
});

$("#pa-search").on('click', function() {
	event.preventDefault();
	/* Act on the event */
	$(this).closest('.card-box').find('.overlay').css('display', 'none');
	$(this).closest('.chart').find("overlay").css('display', 'block');
});


})(jQuery); // Fully reference jQuery after this point.

(function($) {

$(".switch.socio input[type='checkbox']").on('click', function() {
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

$("#pago-input").on("keyup", function() {
	var str = $(this).val().toLowerCase();
	if (str == 'pago') {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'flex');
	} else {
		$(this).parent('.inner-div').find('.visto-circle').css('display', 'none');		
	}
});



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
	$(this).closest('.card-box').find(".overlay-search").css('display', 'block');
	$('#inner-chart-info-switch').prop('checked', true);
});

$('#inner-chart-info-switch').on('click', function() {
	if (! $(this).is(':checked')) {
		$(this).closest('.card-box').find('.overlay').css('display', 'block');
		$(this).closest('.card-box').find(".overlay-search").css('display', 'none');		
	}
});

$(".num-pas").on('click', function() {
	$(this).closest('.card-box').find('.overlay-search').css('display', 'none');
	$(this).closest('.card-box').find(".overlay").css('display', 'block');	
});

$("#chart-pa-switch").on('click', function(e) {
	// e.preventDefault();
	console.log('here');

	if ($(this).is(':checked')) {
		$(this).closest('.card-info').find('.card-box.widget').css('display', 'none');
		$(this).closest('.card-info').find('.card-box-table').css('display', 'block');	
	} else {
		$(this).closest('.card-info').find('.card-box.widget').css('display', 'block');
		$(this).closest('.card-info').find('.card-box-table').css('display', 'none');	
	}
});

$('#pago-switch').on('click', function() {
	$(this).closest('.card-box').css('height', '50vh');
});

$(".pagamento .fa-close").on('click', function(e) {
	e.preventDefault();
	$(this).closest('.card-box').css('height', 'initial');
	$(this).closest('.card-box').find('.overlay').css('display', 'none');
	$(".switch input[type='checkbox']").removeAttr('checked');
});
})(jQuery); // Fully reference jQuery after this point.

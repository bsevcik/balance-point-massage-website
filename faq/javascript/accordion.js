$(function() {
	$('.ss_button').on('click',function() {
		if ($(this).next('.ss_content').is(":visible")) {
			$(this).next('.ss_content').slideToggle('fast');
		} else {
			$('.ss_content').slideUp('fast');
			$(this).next('.ss_content').slideDown('fast');

		}
			
	});
});


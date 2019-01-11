( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button"><img src="../Images/logo%20files/new%20logo%20images/websitelogorighttext.png" height="50px"></div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

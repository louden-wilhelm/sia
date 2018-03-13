$( "div[id^='article-']" ).click( function( event ) {
	var image = $( this ).find( '.block-image' ).attr("src");
	var header = $( this ).find( '.block-header' ).text();
	var content = $( this ).find( '.block-content' ).text();
	var date = $( this ).find( '.publish-date' ).text();
	$( '#featured-image' )
		.attr( "src", image )
		.animate({
			left: 280
		  }, 'slow');
	$( '#featured-header' )
		.text( header )
		.animate({
			left: 280
		  }, 'slow');
	$( '#featured-content' )
		.text( content )
		.animate({
			left: 280
		  }, 'slow');
	$( '#featured-date' )
		.text( date )
		.animate({
			left: 280
		  }, 'slow');
    $( this ).hide;
});

$('.hamburger').on('click', function(e){
	$('.mini-menu').toggleClass('slide');
	e.preventDefault();
});


(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	// $(document).ready(function($) {
	// 	$('.accordion-front-inner-content').accordion({
	// 		collapsible: true,
	// 		active: true,
	// 		header: '.accordion-title',
	// 		heightStyle: "content"
	// 	});
	// });

	$(document).ready(function() {
		// $('.accordion-front-block .accordion-front-inner-content:nth-child(1) .accordion-title').addClass('active');
		// $('.accordion-front-block .accordion-front-inner-content:nth-child(1) .accordion-content').slideDown();
		$('.accordion-title').on('click', function() {
			if($(this).hasClass('active')) {
			  $(this).siblings('.accordion-content').slideUp();
			  $(this).removeClass('active');
			}
			else {
			  $('.accordion-content').slideUp();
			  $('.accordion-title').removeClass('active');
			  $(this).siblings('.accordion-content').slideToggle();
			  $(this).toggleClass('active');
			}
		});     
		});
	
})( jQuery );

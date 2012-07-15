(function($) {
	$.fn.limitText = function(options) {
		var defaults = {
			limit : 200,
			counterSelector : false,
			alertClass : false
		}
		var options = $.extend(defaults, options);

		return this.each(function() {
			updateCounter(options, $(this).val().length);

			$(this).keyup(function() {
				if ($(this).val().length > options.limit) {
					$(this).val($(this).val().substr(0, options.limit));
				}
				updateCounter(options, $(this).val().length);
			});
		});

		// Helper functions
		function updateCounter(options, currentTextLength) {
			if (options.counterSelector != false) {
				var remaining = options.limit - currentTextLength;
				$(options.counterSelector).html(remaining);
				if (remaining <= 10) {
					$(options.counterSelector).addClass(options.alertClass);
				} else {
					$(options.counterSelector).removeClass(options.alertClass);
				}
			}
		}

	};
})(jQuery);

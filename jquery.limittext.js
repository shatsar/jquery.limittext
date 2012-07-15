(function($) {
	$.fn.limitText = function(options) {
		var defaults = {
			limit : 200,
			counterSelector : false,
			alertClass : false
		}
		var options = $.extend(defaults, options);
		return this.each(function() {
			var characters = options.limit;
			if (options.counterSelector != false) {
				$(options.counterSelector).html(characters);
			}
			$(this).keyup(
					function() {
						if ($(this).val().length > characters) {
							$(this).val($(this).val().substr(0, characters));
						}
						if (options.counterId != false) {
							var remaining = characters - $(this).val().length;
							$(options.counterSelector).html(remaining);
							if (remaining <= 10) {
								$(options.counterSelector).addClass(
										options.alertClass);
							} else {
								$(options.counterSelector).removeClass(
										options.alertClass);
							}
						}
					});
		});
	};
})(jQuery);
(function($) {
	$.fn.limitText = function(options) {
		var defaults = {
			limit : 200,
			counterId : false,
			alertClass : false
		}
		var options = $.extend(defaults, options);
		return this.each(function() {
			var characters = options.limit;
			if (options.counterId != false) {
				$("#" + options.counterId).html(characters);
			}
			$(this).keyup(
					function() {
						if ($(this).val().length > characters) {
							$(this).val($(this).val().substr(0, characters));
						}
						if (options.counterId != false) {
							var remaining = characters - $(this).val().length;
							$("#" + options.counterId).html(remaining);
							if (remaining <= 10) {
								$("#" + options.counterId).addClass(
										options.alertClass);
							} else {
								$("#" + options.counterId).removeClass(
										options.alertClass);
							}
						}
					});
		});
	};
})(jQuery);
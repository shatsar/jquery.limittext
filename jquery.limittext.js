(function($) {
	$.fn.limitText = function(options) {
		var defaults = {
			limit : 200,
			counterSelector : false,
			warningLevel : 10
		}
		var options = $.extend(defaults, options);

		return this.each(function() {
			$(this).addClass("limittext");
			updateCounter(options, $(this).val().length);

			$(this).keyup(function() {
				if ($(this).val().length > options.limit) {
					$(this).val($(this).val().substr(0, options.limit));
				}
				updateCounter(options, $(this).val().length);
			});
			
			$(this).parent("form").on("reset", function() {
				$(this).find(".limittext").each(function(){
					updateCounter(options, 0);	
				})
			});
		});

		// Helper functions
		function updateCounter(options, currentTextLength) {
			if (options.counterSelector != false) {
				var remaining = options.limit - currentTextLength;
				$(options.counterSelector).html(remaining);
				if(remaining == 0) {
					$(options.counterSelector).trigger('limittext-limit');
				} else if (remaining <= options.warningLevel) {
					$(options.counterSelector).trigger('limittext-warning');
				} else {
					$(options.counterSelector).trigger('limittext-ok');
				}
			}
		}

	};
})(jQuery);

import fullscreenRemoveClass from "./methods/remove-class";
import fullscreenToggleClass from "./methods/toggle-class";

export default class HSFullscreen {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			targetEl: null,
			mainContainerSelector: 'body',
			toggleClassName: '.hs-fullscreen',
			preventScrollClassName: '.hs-fullscreen-on'
		};
		this.settings = settings;
	}

	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-fullscreen-options') ? JSON.parse($el.attr('data-hs-fullscreen-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);

		// context._templateInnerFunction();

		$el.on('click', function () {
			fullscreenToggleClass($(options.targetEl), options);
		});

		$(document).on('keydown', function (e) {
			if (!$(options.targetEl).hasClass(options.toggleClassName.slice(1))) return;

			if (e.keyCode === 27) {
				fullscreenRemoveClass($(options.targetEl), options);
			}
		});
	}

	// _templateInnerFunction() {
	//
	// }
}

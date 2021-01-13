export default class HSLoadingState {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			targetEl: null,
			targetElStyles: {
				position: ''
			},
			targetElCustomStyles: {
				position: 'relative'
			},

			eventType: 'click',
			loaderMode: 'simple',
			loaderText: 'Loading...',
			removeLoaderDelay: 1500,

			loaderContainerClassNames: 'hs-loader-wrapper',
			loaderContainerExtendedClassNames: '',

			loaderClassNames: 'hs-loader',
			loaderExtendedClassNames: '',
			loaderWithTextClassNames: 'hs-loader-with-text',

			loaderIconClassNames: 'spinner-border spinner-border-sm text-primary',
			loaderIconExtendedClassNames: '',

			loaderTextClassNames: 'hs-loader-text',
			loaderTextExtendedClassNames: '',

			beforeLoading: null,
			afterLoading: null
		};
		this.settings = settings;
	}

	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-loading-state-options') ? JSON.parse($el.attr('data-hs-loading-state-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);

		context._loading($el, options);
	}

	_loading(el, config) {
		const context = this;

		el.on(config.eventType, function () {
			const $loader = $(context._selectTemplate(config));

			if (typeof config.beforeLoading === 'function') {
				let before = config.beforeLoading(el, config);

				if (before === false) return;
			}

			$(config.targetEl)
				.css(config.targetElCustomStyles)
				.append($loader);

			$loader.show();

			setTimeout(function () {
				$loader.fadeOut(400, function () {
					$(config.targetEl)
						.css(config.targetElStyles);

					$(this).remove();

					if (typeof config.afterLoading === 'function') {
						config.afterLoading(el, config);
					}
				});
			}, config.removeLoaderDelay);
		});
	}

	_selectTemplate(config) {
		if (config.loaderMode === 'with-text') {
			return `<div class="${config.loaderContainerClassNames} ${config.loaderContainerExtendedClassNames}">
				<div class="${config.loaderClassNames} ${config.loaderExtendedClassNames} ${config.loaderWithTextClassNames}">
					<span class="${config.loaderTextClassNames} ${config.loaderTextExtendedClassNames}">${config.loaderText}</span>
					<span class="${config.loaderIconClassNames} ${config.loaderIconExtendedClassNames}"></span>
				</div>
      </div>`;
		} else {
			return `<div class="${config.loaderContainerClassNames} ${config.loaderContainerExtendedClassNames}">
				<div class="${config.loaderClassNames} ${config.loaderExtendedClassNames}">
					<span class="${config.loaderIconClassNames} ${config.loaderIconExtendedClassNames}"></span>
				</div>
      </div>`;
		}
	}
}

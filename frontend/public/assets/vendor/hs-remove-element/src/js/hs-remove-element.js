export default class HSRemoveElement {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			targetEl: null,
			
			beforeDelete: null,
			afterDelete: null,
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-remove-element-options') ? JSON.parse($el.attr('data-hs-remove-element-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		context._removeElement($el, options);
	}
	
	_removeElement(el, config) {
		el.on('click', function () {
			if (typeof config.beforeDelete === 'function') {
				let before = config.beforeDelete(el, config);
				
				if (before === false) return;
			}
			
			$(config.targetEl).remove();
			
			if (typeof config.afterDelete === 'function') {
				config.afterDelete(el, config);
			}
		});
	}
}

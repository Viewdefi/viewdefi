export default function fullscreenRemoveClass(el, params) {
	const options = params;
	
	el.removeClass(options.toggleClassName.slice(1));
	
	$(options.mainContainerSelector).removeClass(options.preventScrollClassName.slice(1));
}

import fullscreenAddClass from "./add-class";
import fullscreenRemoveClass from "./remove-class";

export default function fullscreenToggleClass(el, params) {
	const options = params;
	
	if (!el.hasClass(options.toggleClassName.slice(1))) {
		fullscreenAddClass(el, options);
	} else {
		fullscreenRemoveClass(el, options);
	}
}

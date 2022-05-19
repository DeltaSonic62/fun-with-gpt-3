export default function setTheme(theme?: string) {
	// Remove all classes from body
	document.body.removeAttribute('class');

	if (theme) {
		if (theme === 'dark') {
			document.body.classList.add('dark');
			document.body.classList.add('bg-gray-900');
		}

		// Set the theme in local storage
		window.localStorage.setItem('theme', theme);

		return;
	}

	/**
	 * Add dark theme class to body if either:
	 * localStorage theme is dark
	 * there is no theme in localStorage and prefers-color-scheme is dark
	 */
	if (
		window.localStorage.getItem('theme') === 'dark' ||
		(window.localStorage.getItem('theme') === null &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.body.classList.add('dark');
		document.body.classList.add('bg-gray-900');
	}
}

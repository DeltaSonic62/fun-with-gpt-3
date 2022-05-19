export default function getTheme() {
	/**
	 * Return dark if either:
	 * localStorage theme is dark
	 * there is no theme in localStorage and prefers-color-scheme is dark
	 */
	if (
		window.localStorage.getItem('theme') === 'dark' ||
		(window.localStorage.getItem('theme') === null &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		return 'dark';
	}

	return 'light';
}

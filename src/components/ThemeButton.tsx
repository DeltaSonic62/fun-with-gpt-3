import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { getTheme, setTheme } from '../scripts';

const ThemeButton = () => {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const handleClick = () => {
		console.log(isLightTheme);
		setTheme(isLightTheme ? 'dark' : 'light');
		setIsLightTheme((prev) => !prev);
	};

	useEffect(() => {
		setIsLightTheme(getTheme() === 'light');
	}, []);

	return (
		<button
			aria-label='Toggle theme button'
			className='fixed p-2 text-black transition bg-white rounded-full dark:bg-black dark:text-white top-5 right-5 focus:outline-none focus:ring-2 focus:ring-blue-700'
			onClick={handleClick}>
			{isLightTheme ? <SunIcon className='w-4 h-4' /> : <MoonIcon className='w-4 h-4' />}
		</button>
	);
};

export default ThemeButton;

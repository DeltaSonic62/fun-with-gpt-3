import { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

type ResponseCardProps = {
	prompt: string;
	response: string;
	onDelete: (key: number) => void;
};

const ResponseCard = ({ prompt, response, onDelete }: ResponseCardProps) => {
	const [style, setStyle] = useState<React.CSSProperties>({
		opacity: 0,
		transform: 'translateX(80%)',
	});

	// Animate in on mount
	useEffect(() => {
		setStyle({ opacity: 1, transform: 'translateX(0%)', transition: 'all 620ms ease-in-out' });
	}, []);

	return (
		<div
			className='relative flex flex-col w-full p-1 bg-white shadow dark:bg-gray-800 md:w-4/5 md:max-w-2xl lg:max-w-4xl lg:flex-row rounded-xl hover:shadow-md'
			style={style}>
			<div className='flex-1 p-4 border-b lg:border-b-0 lg:border-r dark:border-gray-700'>
				<h3 className='mb-2 text-xl font-semibold font-title md:text-2xl'>Prompt</h3>
				<p>{prompt}</p>
			</div>
			<div className='flex-1 p-4 border-t lg:border-t-0 lg:border-l dark:border-gray-700'>
				<h3 className='mb-2 text-xl font-semibold font-title md:text-2xl'>Response</h3>
				<p>{response}</p>
			</div>
			<button
				className='absolute p-1 bg-red-500 rounded-full right-2 top-2'
				onClick={() => onDelete(-1)}>
				<XIcon className='w-4 h-4 text-white' />
			</button>
		</div>
	);
};

export default ResponseCard;

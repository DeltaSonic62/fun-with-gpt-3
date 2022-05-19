import { XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

type ResponseCardProps = {
	prompt: string;
	response: string;
	onDelete: (key: number) => void;
};

const ResponseCard = ({ prompt, response, onDelete }: ResponseCardProps) => {
	return (
		<motion.div
			animate={{ x: ['80%', '0%'] }}
			transition={{ ease: 'easeInOut', duration: 0.62 }}
			className='relative flex flex-col w-full p-1 bg-white shadow dark:bg-gray-800 md:w-4/5 md:max-w-2xl lg:max-w-4xl lg:flex-row rounded-xl hover:shadow-md'>
			<div className='flex-1 p-4 border-b lg:border-b-0 lg:border-r dark:border-gray-700'>
				<h3 className='mb-2 text-xl font-semibold font-title md:text-2xl'>Prompt</h3>
				<p>{prompt}</p>
			</div>
			<div className='flex-1 p-4 border-t lg:border-t-0 lg:border-l dark:border-gray-700'>
				<h3 className='mb-2 text-xl font-semibold font-title md:text-2xl'>Response</h3>
				{response.split('\n').map((line, index) => (
					<p key={line + index.toString()}>{line}</p>
				))}
			</div>
			<button
				aria-label={'Delete card with prompt: ' + prompt}
				className='absolute p-1 transition bg-red-500 rounded-full right-2 top-2 focus:outline-none focus:ring-2 focus:ring-blue-700'
				onClick={() => onDelete(-1)}>
				<XIcon className='w-4 h-4 text-white' />
			</button>
		</motion.div>
	);
};

export default ResponseCard;

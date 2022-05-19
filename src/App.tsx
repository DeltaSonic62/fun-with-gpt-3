import { useEffect, useRef, useState } from 'react';
import { ReplyIcon } from '@heroicons/react/outline';
import { Button, FAB, ResponseCard, TextInput, ThemeButton } from './components';
import { getResponse, setTheme } from './scripts';

type responseObject = {
	key: number;
	prompt: string;
	response: string;
};

function App() {
	const promptRef = useRef('');
	const [responses, setResponses] = useState<responseObject[]>([]);
	const deletedResponsesRef = useRef<responseObject[]>([]);

	const handleSubmit = () => {
		// Don't submit if the prompt is empty
		if (promptRef.current === '') {
			return;
		}

		const key = Date.now();
		const newObj = { key, prompt: promptRef.current, response: getResponse(promptRef.current) };

		// Save to localStorage
		window.localStorage.setItem('responses', JSON.stringify([...responses, newObj]));

		// Save to state
		setResponses((prev) => [...prev, newObj]);
	};

	const handlePromptInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		promptRef.current = e.target.value;
	};

	const handleEnterKeyPressed = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleDelete = (key: number) => {
		// Add to deletedResponsesRef
		deletedResponsesRef.current = [
			...deletedResponsesRef.current,
			responses.filter((response) => response.key === key)[0],
		];

		// Remove from localStorage
		window.localStorage.setItem(
			'responses',
			JSON.stringify(responses.filter((response) => response.key !== key))
		);

		// Remove from state
		setResponses((prev) => prev.filter((response) => response.key !== key));
	};

	const handleUndo = () => {
		const lastResponseRemoved = deletedResponsesRef.current.pop()!;

		// Add to localStorage + sort
		window.localStorage.setItem(
			'responses',
			JSON.stringify([...responses, lastResponseRemoved].sort((a, b) => a.key - b.key))
		);

		// Add to state + sort
		setResponses((prev) => [...prev, lastResponseRemoved].sort((a, b) => a.key - b.key));
	};

	useEffect(() => {
		// Set Theme
		setTheme();

		const promptInput = document.getElementById('promptInput') as HTMLInputElement;

		// Load Responses from localStorage if available
		if (window.localStorage.getItem('responses') !== null) {
			setResponses(JSON.parse(window.localStorage.getItem('responses')!));
		}

		// Focus on prompt input
		promptInput.focus();

		// Add Event Listener to input field to get response when Enter is pressed
		promptInput.addEventListener('keydown', handleEnterKeyPressed);

		return () => {
			promptInput.removeEventListener('keydown', handleEnterKeyPressed);
		};
	}, []);

	return (
		<div className='flex flex-col items-center w-screen min-h-screen p-10 gap-7'>
			{/* Theme Button */}
			<ThemeButton />

			{/* Title */}
			<h1 className='text-5xl md:text-6xl mt-[30vh] font-bold font-title text-transparent bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text drop-shadow'>
				Fun with GPT-3
			</h1>

			{/* Prompt Section */}
			<TextInput id='promptInput' text='Enter Prompt' onChange={handlePromptInput} />
			<Button text='Submit' onClick={handleSubmit} />

			{/* Responses Section */}
			{responses.length > 0 && (
				<>
					<h2 className='mt-20 text-3xl font-semibold font-title md:text-4xl'>
						Responses
					</h2>
					<div className='flex flex-col-reverse items-center justify-center w-full gap-5'>
						{responses.map((response) => (
							<ResponseCard
								key={response.key}
								prompt={response.prompt}
								response={response.response}
								onDelete={() => handleDelete(response.key)}
							/>
						))}
					</div>
				</>
			)}

			{/* Undo Button */}
			{deletedResponsesRef.current.length > 0 && (
				<FAB text='Undo' icon={<ReplyIcon className='w-4 h-4' />} onClick={handleUndo} />
			)}
		</div>
	);
}

export default App;

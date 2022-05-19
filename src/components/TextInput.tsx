type TextInputProps = {
	id: string;
	text: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ id, text, onChange }: TextInputProps) => (
	<input
		className='w-full px-3 py-3 text-black transition bg-white shadow dark:bg-gray-800 dark:text-white md:w-4/5 rounded-xl hover:shadow-md focus:shadow-md focus:outline-0 focus:ring-2 focus:ring-blue-700'
		id={id}
		placeholder={text}
		type='text'
		onChange={onChange}
	/>
);

export default TextInput;

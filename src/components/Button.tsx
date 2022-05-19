type ButtonProps = {
	onClick?: () => void;
	text: string;
};

const Button = ({ onClick, text }: ButtonProps) => (
	<button
		className='px-5 py-3 font-semibold text-black transition shadow bg-emerald-400 rounded-xl hover:shadow-md hover:scale-105 active:scale-95 active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-700'
		onClick={onClick}>
		{text}
	</button>
);

export default Button;

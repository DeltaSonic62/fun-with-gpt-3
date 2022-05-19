type FABProps = {
	icon: React.ReactNode;
	text: string;
	onClick?: () => void;
};

const FAB = ({ icon, text, onClick }: FABProps) => (
	<button
		className='fixed px-5 py-3 transition bg-transparent shadow text-emerald-700 dark:text-emerald-100 bottom-5 right-5 ring-2 ring-emerald-400 rounded-xl hover:shadow-md hover:scale-105 active:scale-95 active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-700'
		onClick={onClick}>
		<span className='flex items-center gap-3 font-semibold'>
			{icon}
			{text}
		</span>
	</button>
);

export default FAB;

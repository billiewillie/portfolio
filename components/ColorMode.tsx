export function ColorMode() {
	return (
		<div className="flex items-center justify-center gap-4">
			<button
				type={'button'}
				className={'bg-backdrop flex items-center justify-center rounded-full border border-black-700 shadow backdrop-blur-md transition-all active:scale-90 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none'}>
				<div className="flex items-center justify-center rounded-full p-3 sm:p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
					</svg>
				</div>
			</button>
		</div>
	)
}
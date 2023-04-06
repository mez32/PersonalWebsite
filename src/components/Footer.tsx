const Footer: React.FC = () => {
	return (
		<footer>
			<div className='absolute w-full mx-auto pb-2 items-center text-center'>
				<p>&#169; {new Date().getFullYear()} by Alexander Mesmer</p>
			</div>
		</footer>
	)
}

export default Footer

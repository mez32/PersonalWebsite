const Footer: React.FC = () => {
	return (
		<footer>
			<div className='absolute bottom-0 w-full -mt-2 py-2 mx-auto justify-center items-center text-center'>
				<p>&#169; {new Date().getFullYear()} by Alexander Mesmer</p>
			</div>
		</footer>
	)
}

export default Footer

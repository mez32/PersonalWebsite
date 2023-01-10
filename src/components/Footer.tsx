import React, { useEffect } from 'react'

const Footer: React.FC = () => {
	return (
		<div className='bg-neutral-800 w-11/12 md:w-4/5 lg:w-3/5 lg:max-w-6xl p-2 mb-4 mx-auto justify-center items-center text-center border-black rounded-xl overflow-hidden shadow-md'>
			<p>&#169; {new Date().getFullYear()} by Alexander Mesmer</p>
		</div>
	)
}

export default Footer

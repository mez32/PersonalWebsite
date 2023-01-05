import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[]
}

const MainCard: React.FC<Props> = ({ children }) => {
	return (
		<div className='bg-neutral-800 w-11/12 md:w-4/5 lg:w-3/5 max-w-6xl mt-4 mx-auto justify-center items-center text-center border-black rounded-xl overflow-hidden p-6 md:p-8 shadow-md'>
			{children}
		</div>
	)
}

export default MainCard

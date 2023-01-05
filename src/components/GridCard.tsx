import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
	children: JSX.Element | JSX.Element[]
	routeId: string
}

const GridCard: React.FC<Props> = ({ children, routeId }) => {
	return (
		<Link to={routeId}>
			<div className='w-full mt-4'>
				<div className='bg-neutral-800 flex justify-center items-center text-center mx-1 md:mx-2 aspect-video rounded-xl shadow-md border-black transform transition duration-400 hover:scale-105 active:scale-95'>
					{children}
				</div>
			</div>
		</Link>
	)
}

export default GridCard

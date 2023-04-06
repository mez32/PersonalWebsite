import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
	children: JSX.Element | JSX.Element[]
	routeId?: string
}

const GridCard: React.FC<Props> = ({ children, routeId }) => {
	if (routeId) {
		return (
			<Link to={routeId}>
				<div className='w-full h-full mb-4'>
					<div className='bg-neutral-800 flex justify-center items-center text-center md:mx-2 aspect-video rounded-xl shadow-md border-2 border-opacity-40 border-neutral-700 transform transition duration-400 hover:scale-105 active:scale-95'>
						{children}
					</div>
				</div>
			</Link>
		)
	}
	return (
		<div className='w-full h-full mb-4'>
			<div className='bg-neutral-800 flex justify-center items-center text-center md:mx-2 aspect-video rounded-xl shadow-md border-2 border-opacity-40 border-neutral-700'>
				{children}
			</div>
		</div>
	)
}

export default GridCard

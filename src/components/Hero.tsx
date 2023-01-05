import React from 'react'
import MainCard from './MainCard'
import Divider from './Divider'

const Hero: React.FC = () => {
	return (
		<MainCard>
			<div className='justify-center flex pt-2 pb-4'>
				<img
					className='rounded-[60px] h-auto w-44 shadow-md'
					src='assets/alexImage.webp'
					alt='A picture of me'
				/>
			</div>
			<h1 className='pb-4'>Alex Mesmer</h1>
			<Divider />
			<h3 className='p-4'>Software Engineer</h3>
			<p className='text-xl md:text-2xl pb-2'>Lexington, KY</p>
		</MainCard>
	)
}

export default Hero

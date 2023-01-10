import React from 'react'
import { IconBook, IconBriefcase, IconPhoneIncoming, IconUser } from '@tabler/icons'
import GridCard from '../components/GridCard'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home: React.FC = () => {
	return (
		<div className='justify-center items-center text-center'>
			<Hero />

			<div className='grid md:grid-cols-2 w-11/12 md:w-4/5 lg:w-3/5 lg:max-w-6xl mx-auto mb-4'>
				<GridCard routeId='about'>
					<IconUser className='mr-2 align-middle' size={34} />
					<h3>About Me</h3>
				</GridCard>
				<GridCard routeId='knowledge'>
					<IconBook className='mr-2 align-middle' size={38} />
					<h3>Knowledge</h3>
				</GridCard>
				<GridCard routeId='experience'>
					<IconBriefcase className='mr-2 align-middle' size={32} />
					<h3>Work Experience</h3>
				</GridCard>
				<GridCard routeId='contact'>
					<IconPhoneIncoming className='mr-2 align-middle' size={32} />
					<h3>Contact Me</h3>
				</GridCard>
			</div>

			<Footer />
		</div>
	)
}

export default Home

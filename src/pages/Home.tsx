import React from 'react'
import { IconCode, IconBriefcase, IconPhoneIncoming, IconUser } from '@tabler/icons'
import GridCard from '../components/GridCard'
import Footer from '../components/Footer'
import Divider from '../components/Divider'

const Home: React.FC = () => {
	return (
		<>
			<div className='relative min-h-screen justify-center items-center text-center'>
				<div className='grid md:grid-cols-2 w-11/12 md:w-4/5 lg:w-3/5 lg:max-w-5xl xl:max-w-6xl mx-auto pb-12 md:pt-8 3xl:pt-16'>
					<GridCard>
						<div className='justify-center flex p-4'>
							<img
								className='rounded-[60px] h-auto w-40 md:w-32 2xl:w-40 3xl:w-44 shadow-md'
								src='assets/alexImage.webp'
								alt='A picture of me'
							/>
						</div>
					</GridCard>
					<GridCard>
						<div className='justify-center items-center text-center p-4 md:p-5'>
							<h2 className='pb-4 text-4xl xl:text-5xl 3xl:text-6xl'>Alex Mesmer</h2>
							<Divider />
							<h3 className='py-4 text-2xl lg:text-3xl 3xl:text-4xl'>Software Engineer</h3>
							<h4 className='text-xl 3xl:text-2xl'>Lexington, KY</h4>
						</div>
					</GridCard>
					<GridCard routeId='about'>
						<IconUser className='mr-2 align-middle' size={34} />
						<h3>About Me</h3>
					</GridCard>
					<GridCard routeId='knowledge'>
						<IconCode className='mr-2 align-middle' size={38} />
						<h3>Knowledge</h3>
					</GridCard>
					<GridCard routeId='experience'>
						<IconBriefcase className='mr-2 align-middle' size={32} />
						<h3>Experience</h3>
					</GridCard>
					<GridCard routeId='contact'>
						<IconPhoneIncoming className='mr-2 align-middle' size={32} />
						<h3>Contact Me</h3>
					</GridCard>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Home

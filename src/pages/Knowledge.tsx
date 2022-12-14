import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Divider from '../components/Divider'
import MainCard from '../components/MainCard'
import ToolTip from '../components/ToolTip'

const Knowledge: React.FC = () => {
	return (
		<div className='mb-4 md:mt-8'>
			<MainCard>
				<h1 className='pb-4'>Knowledge</h1>
				<Divider />
				<div className='mt-4 md:mx-4'>
					<p className='text-left text-lg md:text-xl lg:text-2xl mb-2'>
						These are the languages I currently know:
					</p>
					<ul className='text-left text-lg md:text-xl list-disc list-outside ml-6 mb-2'>
						<li>JavaScript</li>
						<li>TypeScript</li>
					</ul>
					<p className='text-left text-lg md:text-xl lg:text-2xl mb-4'>
						TypeScript is what I use day in and day out at this point and is what I write in at my
						current position. I have also picked up and used these frameworks and libraries:
					</p>
					<ul className='text-left text-lg md:text-xl list-disc list-outside ml-6 mb-2'>
						<li>Backend: Node, Express, NestJS, Prisma, Sequelize, Mongoose, Twilio</li>
						<li>
							Frontend: React, NextJS, Redux Toolkit, Vite, Formik, Jest, React Testing Library,
							React Bootstrap, Mantine UI, CSS (Tailwind, SASS, CSS in JS)
						</li>
						<li>Other services: Vite, Docker, Kubernetes, SQL, Mongo, Firebase, and AWS</li>
					</ul>
					<p className='text-left text-lg md:text-xl lg:text-2xl mb-2'>
						Some of my projects and achievements are:
					</p>
					<ul className='text-left text-lg md:text-xl list-disc list-outside ml-6 mb-2'>
						<li>
							Site to make my resumes in HTML and CSS made with React and a tool to export them as
							images.
						</li>
						<li>
							API and admin website for an in development app in TypeScritpt with NextJS, Tailwind,
							Docker, Twilio, Prisma, and MySQL.
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/The-Blogg'>
								<a
									href='https://github.com/mez32/The-Blogg'
									target='_blank'
									className='hover:text-neutral-100'
								>
									Blog site made with NextJS, Tailwind CSS, Prisma, MySQL, and Docker from scratch.
								</a>
							</ToolTip>
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/TS-Code-Editor'>
								<a
									href='https://github.com/mez32/TS-Code-Editor'
									target='_blank'
									className='hover:text-neutral-100'
								>
									Code Editor site using TypeScript, React, Redux Toolkit, and Material UI.
								</a>
							</ToolTip>
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/the-shop'>
								<a
									href='https://github.com/mez32/the-shop'
									target='_blank'
									className='hover:text-neutral-100'
								>
									Full stack Ecommerce platform using Express, Mongo, React, Redux, and PayPal.
								</a>
							</ToolTip>
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/Nest-Car-Value-Tool'>
								<a
									href='https://github.com/mez32/Nest-Car-Value-Tool'
									target='_blank'
									className='hover:text-neutral-100'
								>
									A backend API for a simple car estimate tool using TypeScript and NestJS.
								</a>
							</ToolTip>
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/Microservices-Ticket-App'>
								<a
									href='https://github.com/mez32/Microservices-Ticket-App'
									target='_blank'
									className='hover:text-neutral-100'
								>
									A microservices app with Docker, Kubernetes, TypeScript, Express, NATS streaming
									server, Mongo, and NextJS.
								</a>
							</ToolTip>
						</li>
						<li>
							<ToolTip text='https://github.com/mez32/placer-frontend'>
								<a
									href='https://github.com/mez32/placer-frontend'
									target='_blank'
									className='hover:text-neutral-100'
								>
									Full stack social gathering social media site with image uploading in JavaScript.
								</a>
							</ToolTip>
						</li>
					</ul>
					<p className='text-left text-lg md:text-xl lg:text-2xl mb-4'>
						All knowledge was acquired from Udemy.com from a multitude of courses, from my current
						position, and from personal side projects that may not be visible on my Github.
					</p>
				</div>
				<Link to={'/'}>
					<Button>&larr; Home</Button>
				</Link>
			</MainCard>
		</div>
	)
}

export default Knowledge

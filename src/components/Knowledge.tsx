import { Container, List, createStyles, Text, Space, Anchor, Tooltip } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	wrapper: {
		textAlign: 'left',
	},
	bodyText: {
		textAlign: 'left',
		listStylePosition: 'outside',
		font: 'inherit',
		fontSize: '1rem',
	},
	linkOverride: {
		'&:hover': {
			color: 'white',
			textDecoration: 'underline',
		},
	},
	container: {
		marginBottom: '1rem',
	},
}))

const Knowledge: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container className={classes.container}>
			<h2>Knowledge</h2>
			<div className={classes.wrapper}>
				<Text inherit>These are the languages I currently know :</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>JavaScript</List.Item>
					<List.Item>TypeScript</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>
					TypeScript is what I use day in and day out at this point and is what I write in at my
					current position. I have also picked up a couple frameworks and libraries along the way :
				</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>Backend: Node, Express, NestJS, Prisma, Sequelize, Mongoose</List.Item>
					<List.Item>
						Frontend: React, NextJS, Redux Toolkit, Vite, Jest, React Testing Library, React
						Bootstrap, Mantine UI, CSS (Tailwind, SASS, CSS in JS)
					</List.Item>
					<List.Item>
						Other services: Vite, Docker, Kubernetes, SQL, Mongo, Firebase, and AWS
					</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>Some of my projects and achievements are:</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>
						Blog site made with NextJS, Tailwind CSS, Prisma, MySQL, and Docker from scratch.{'  '}
						<Tooltip label='https://github.com/mez32/The-Blogg'>
							<Anchor
								href='https://github.com/mez32/The-Blogg'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						Code Editor site using TypeScript, React, Redux Toolkit, and Material UI.{'  '}
						<Tooltip label='https://github.com/mez32/TS-Code-Editor'>
							<Anchor
								href='https://github.com/mez32/TS-Code-Editor'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						Full stack Ecommerce platform using Express, Mongo, React, Redux, and PayPal.{' '}
						<Tooltip label='https://github.com/mez32/the-shop'>
							<Anchor
								href='https://github.com/mez32/the-shop'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						A backend API for a simple car estimate tool using TypeScript and NestJS.{' '}
						<Tooltip label='https://github.com/mez32/Nest-Car-Value-Tool'>
							<Anchor
								href='https://github.com/mez32/Nest-Car-Value-Tool'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						A microservices app with Docker, Kubernetes, TypeScript, Express, NATS streaming server,
						Mongo, and NextJS.{' '}
						<Tooltip label='https://github.com/mez32/Microservices-Ticket-App'>
							<Anchor
								href='https://github.com/mez32/Microservices-Ticket-App'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						Full stack social gathering social media site with image uploading in JavaScript.{' '}
						<Tooltip label='https://github.com/mez32/placer-frontend'>
							<Anchor
								href='https://github.com/mez32/placer-frontend'
								variant='text'
								target='_blank'
								underline={false}
								size='sm'
								className={classes.linkOverride}
							>
								[view]
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item>
						Site to make my resumes in HTML and CSS made with React and a tool to export them as
						images.
					</List.Item>
					<List.Item>
						Currently building the backend for a personal project in NestJS, Prisma, and MySQL.
					</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>
					All knowledge was acquired from Udemy.com from a multitude of courses, from my current
					position, and from personal side projects that may not be visible on my Github.
				</Text>
			</div>
		</Container>
	)
}

export default Knowledge

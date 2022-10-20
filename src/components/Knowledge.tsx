import { Container, List, createStyles, Text, Space } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	wrapper: {
		textAlign: 'left',
	},
	bodyText: {
		textAlign: 'left',
	},
}))

const Knowledge: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container>
			<div className={classes.wrapper}>
				<h2>Knowledge</h2>
				<Text inherit>These are the languages I currently know :</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>JavaScript</List.Item>
					<List.Item>TypeScript</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>
					TypeScript is what I use day in and day out at this point and is what I write in at my
					current postition. I have also picked up a couple frameworks and libraries along the way :
				</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>Backend: Node, Express, Sequelize, Mongoose, NestJS</List.Item>
					<List.Item>
						Frontend: React, Redux Toolkit, CSS, Formik, Jest, React Testing Library, NextJS
					</List.Item>
					<List.Item>Other services: Docker, Kubernetes, SQL, Mongo, Firebase, and AWS</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>Some of my projects and achievements are:</Text>
				<Space h='sm' />
				<List size='md' withPadding className={classes.bodyText}>
					<List.Item>
						Code Editor site using TypeScript, React, Redux Toolkit, and Material UI
					</List.Item>
					<List.Item>
						Full stack Ecommerce platform using Express, Mongo, React, Redux, and PayPal
					</List.Item>
					<List.Item>
						A backend API for a simple car estimate tool using TypeScript and NestJS
					</List.Item>
					<List.Item>
						A micro sercives app with Docker, Kubernetes, TypeScript, Express, NATS streaming
						server, and NextJS
					</List.Item>
					<List.Item>
						Full stack social gathering social media site with image uploading in JavaScript
					</List.Item>
				</List>
				<Space h='sm' />
				<Text inherit>
					All knowledge was acquired from Udemy.com from a multitude of courses, videos found online
					and from my current position.
				</Text>
			</div>
		</Container>
	)
}

export default Knowledge

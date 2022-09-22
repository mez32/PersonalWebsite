import { Container, List, createStyles, Text, Space } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	bodyText: {
		textAlign: 'left',
	},
}))

const Knowledge: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container>
			<h2>Knowledge</h2>
			<Text align='left' inherit>
				&emsp; Here are the languanges I currently know :
			</Text>
			<Space h='sm' />
			<List size='md' withPadding className={classes.bodyText}>
				<List.Item>JavaScript</List.Item>
				<List.Item>TypeScript</List.Item>
			</List>
			<Space h='sm' />
			<Text align='left' inherit>
				&emsp; TypeScript is what I use day in and day out at this point and is what I write in at
				my current postition.
			</Text>
			<Text align='left' inherit>
				I have also picked up a couple frameworks and libraries along the way :
			</Text>
			<Space h='sm' />
			<List size='md' withPadding className={classes.bodyText}>
				<List.Item>Node</List.Item>
				<List.Item>Express</List.Item>
				<List.Item>Sequelize</List.Item>
				<List.Item>Mongoose</List.Item>
				<List.Item>React</List.Item>
				<List.Item>Redux Toolkit</List.Item>
				<List.Item>Formik</List.Item>
				<List.Item>Jest</List.Item>
				<List.Item>React Testing Library</List.Item>
				<List.Item>React Boostrap</List.Item>
				<List.Item>Ionic</List.Item>
				<List.Item>Material UI</List.Item>
				<List.Item>Mantine (used for this site)</List.Item>
				<List.Item>CSS (modules, CSS in JS, SASS)</List.Item>
				<List.Item>Git</List.Item>
				<List.Item>NestJS (in progress)</List.Item>
			</List>
			<Space h='sm' />
			<Text align='left' inherit>
				&emsp; All knowlegde was acquired from Udemy.com from a multitude of courses. Also have
				experience with Docker, Kubernetes, SQL, and AWS services.
			</Text>
		</Container>
	)
}

export default Knowledge

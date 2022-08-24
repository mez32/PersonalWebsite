import { Container, createStyles, Text } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	bodyText: {
		textAlign: 'left',
	},
}))

const WorkExperience: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container>
			<h2>Work Experience</h2>
			<div className={classes.bodyText}>
				<h3>
					<Text weight={400} size={window.innerWidth < 600 ? 20 : 24}>
						- Software Engineer | Cosmic Software Solutions | March 2022 to Current
					</Text>
				</h3>
				<Text align='left' inherit>
					&emsp; Primarily working on the frontend of web applications as a contract engineer using
					TypeScript, React, React Bootstrap, Formik, and Redux Toolkit. Also learned Jest and React
					Testing Library to write a front end testing suite for an application.
				</Text>
				<h3>
					<Text weight={400} size={window.innerWidth < 600 ? 20 : 24}>
						- Disease Investigator | LFCHD | Septembter 2021 to April 2022
					</Text>
				</h3>
				<Text align='left' inherit>
					&emsp; Worked on the Data Team of the Lexington-Fayette County Health Department primarily
					working in the CDC`s database to create and close investigations as well as process,
					clean, and verify data sent to the state and national governments predominantly in
					response to the SARS-Cov-2 pandemic.
				</Text>
				<h3>
					<Text weight={400} size={window.innerWidth < 600 ? 20 : 24}>
						- Retail Sales Consultant | AT&T | June 2015 to September 2021
					</Text>
				</h3>
				<Text align='left' inherit>
					&emsp; Sales person for company owned stores and authorized dealers. Achieved Business
					Expert and FirstNet Expert (healthcare and first responder accounts) status during my
					tenure.
				</Text>
			</div>
		</Container>
	)
}

export default WorkExperience

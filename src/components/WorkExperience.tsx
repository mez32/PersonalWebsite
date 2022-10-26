import { Container, createStyles, Text, List } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	wrapper: {
		textAlign: 'left',
	},
	bodyText: {
		paddingBottom: '0.8rem',
	},
}))

const WorkExperience: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container>
			<h2>Work Experience</h2>
			<div className={classes.wrapper}>
				<h3>
					<Text weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Software Engineer | Cosmic Software Solutions | March 2022 to Current
					</Text>
				</h3>
				<Text className={classes.bodyText} inherit>
					Primarily working on the frontend of web applications as a contract engineer using
					TypeScript, React, React Bootstrap, SASS, Formik, and Redux Toolkit.
				</Text>
				<List size='md' withPadding className={classes.wrapper}>
					<List.Item>
						Used Jest and React Testing Library to cover 31 components with 163 tests, achieving
						over 65% coverage.
					</List.Item>
					<List.Item>Fixed multiple bugs found while creating mentioned testing suite</List.Item>
					<List.Item>
						Conformed all forms to have the same logic, validation and appearance with Formik and
						SCSS
					</List.Item>
				</List>
				<h3>
					<Text weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Disease Investigator | LFCHD | September 2021 to April 2022
					</Text>
				</h3>
				<Text className={classes.bodyText} inherit>
					Worked on the Data Team of the Lexington-Fayette County Health Department primarily
					working in the CDC&apos;s National Electronic Disease Surveillance System (NEDSS) to
					create and close investigations as well as process, clean, and verify data sent to the
					state and national government.
				</Text>
				<List size='md' withPadding className={classes.wrapper}>
					<List.Item>HIPAA Certified by the State of Kentucky</List.Item>
					<List.Item>NEDSS Maintenance certified by the CDC</List.Item>
				</List>
				<h3>
					<Text weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Retail Sales Consultant | AT&T | June 2015 to September 2021
					</Text>
				</h3>
				<Text className={classes.bodyText} inherit>
					Sales person for company owned stores and authorized dealers. Achieved Business Expert and
					FirstNet Expert (healthcare and first responder accounts) status during my tenure.
				</Text>
				<List size='md' withPadding className={classes.wrapper}>
					<List.Item>CPNI Certified yearly</List.Item>
					<List.Item>
						Switched over an entire city&apos;s Emergency Management Department to FirstNet
					</List.Item>
					<List.Item>Achieved Business Expert and FirstNet Expert in multiple years</List.Item>
				</List>
			</div>
		</Container>
	)
}

export default WorkExperience

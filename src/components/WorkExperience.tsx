import { Container, createStyles, Text, List } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	wrapper: {
		textAlign: 'left',
		h3: {
			margin: '0',
			marginBottom: '0.5rem',
			marginTop: '0.5rem',
		},
		h4: {
			margin: '0.1rem',
			marginBottom: '0.5rem',
		},
	},
	listWrapper: {
		listStylePosition: 'outside',
		font: 'inherit',
		fontSize: '1rem',
	},
	cardWrapper: {
		'@media (max-width: 112.5rem)': {
			marginLeft: '1rem',
		},
		'@media (max-width: 37.5rem)': {
			marginLeft: '0.5rem',
		},
	},
	bodyText: {
		paddingBottom: '0.8rem',
		lineHeight: '1.9rem',
		font: 'inherit',
		fontSize: '1rem',
	},
	date: {
		fontSize: '18px',
		fontWeight: 'bold',
	},
	container: {
		marginBottom: '1rem',
	},
}))

const WorkExperience: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container className={classes.container}>
			<h2>Work Experience</h2>
			<div className={classes.wrapper}>
				<h3>
					<Text inherit weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Software Engineer | Cosmic Software Solutions
					</Text>
				</h3>
				<div className={classes.cardWrapper}>
					<h4>
						<Text className={classes.date} inherit>
							March 2022 - Current
						</Text>
					</h4>
					<Text className={classes.bodyText}>
						Primarily working on the frontend of web applications as a contract engineer using
						TypeScript, React, React Bootstrap, SASS, Formik, and Redux Toolkit.
					</Text>
					<List size='md' withPadding className={classes.listWrapper}>
						<List.Item>
							Used Jest and React Testing Library to cover 31 components with 163 tests, achieving
							over 65% coverage.
						</List.Item>
						<List.Item>Fixed multiple bugs found while creating mentioned testing suite</List.Item>
						<List.Item>
							Conformed all forms to have the same logic, validation and appearance with Formik and
							SASS
						</List.Item>
					</List>
				</div>
				<h3>
					<Text weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Disease Investigator | LFCHD
					</Text>
				</h3>
				<div className={classes.cardWrapper}>
					<h4>
						<Text className={classes.date} inherit>
							September 2021 - April 2022
						</Text>
					</h4>
					<Text className={classes.bodyText}>
						Worked on the Data Team of the Lexington-Fayette County Health Department primarily
						working in the CDC&apos;s National Electronic Disease Surveillance System (NEDSS) to
						create and close investigations as well as process, clean, and verify data sent to the
						state and national government.
					</Text>
					<List size='md' withPadding className={classes.listWrapper}>
						<List.Item>HIPAA Certified by the State of Kentucky</List.Item>
						<List.Item>NEDSS Maintenance certified by the CDC</List.Item>
					</List>
				</div>
				<h3>
					<Text weight={500} size={window.innerWidth < 600 ? 20 : 24}>
						Retail Sales Consultant | AT&T
					</Text>
				</h3>
				<div className={classes.cardWrapper}>
					<h4>
						<Text className={classes.date} inherit>
							June 2015 - September 2021
						</Text>
					</h4>
					<Text className={classes.bodyText}>
						Sales person for company owned stores and authorized dealers. Achieved Business Expert
						and FirstNet Expert (healthcare and first responder accounts) status during my tenure.
					</Text>
					<List size='md' withPadding className={classes.listWrapper}>
						<List.Item>CPNI Certified yearly</List.Item>
						<List.Item>
							Switched over an entire city&apos;s Emergency Management Department to FirstNet
						</List.Item>
						<List.Item>Achieved Business Expert and FirstNet Expert in multiple years</List.Item>
					</List>
				</div>
			</div>
		</Container>
	)
}

export default WorkExperience

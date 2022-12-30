import { Container, createStyles, Text, List } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	title: {
		margin: '0.5rem auto',
		'@media (min-width: 112.5rem)': {
			fontSize: '2.2rem',
		},
	},
	divider: {
		left: '10%',
		right: '10%',
		width: '80%',
		height: '0.125rem',
		backgroundColor: '#d4d4d8',
		margin: '0 auto',
		marginBottom: '0.75rem',
	},
	wrapper: {
		textAlign: 'left',
		lineHeight: '130%',
		h3: {
			margin: '0',
			marginBottom: '0.5rem',
			marginTop: '0.5rem',
			'@media (min-width: 112.5rem)': {
				fontSize: '1.6rem',
			},
		},
		h4: {
			margin: '0.1rem',
			marginBottom: '0.5rem',
			'@media (min-width: 112.5rem)': {
				fontSize: '1.4rem',
			},
		},
		'@media (min-width: 112.5rem)': {
			lineHeight: '150%',
		},
	},
	listWrapper: {
		listStylePosition: 'outside',
		color: 'inherit',
		font: 'inherit',
		fontSize: '1rem',
		'@media (min-width: 112.5rem)': {
			fontSize: '1.125rem',
		},
	},
	cardWrapper: {
		marginLeft: '1rem',
		'@media (max-width: 37.5rem)': {
			marginLeft: '0.5rem',
		},
	},
	bodyText: {
		paddingBottom: '0.8rem',
		lineHeight: '1.9rem',
		font: 'inherit',
		fontSize: '1rem',
		'@media (min-width: 112.5rem)': {
			fontSize: '1.125rem',
		},
	},
}))

const WorkExperience: React.FC = () => {
	const { classes } = useStyles()
	return (
		<>
			<h2 className={classes.title}>Work Experience</h2>
			<div className={classes.divider} />
			<Container>
				<div className={classes.wrapper}>
					<h3>
						<Text inherit weight={500} size={window.innerWidth < 600 ? 20 : 24}>
							Software Engineer | Cosmic Software Solutions
						</Text>
					</h3>
					<div className={classes.cardWrapper}>
						<h4>
							<Text inherit>March 2022 - Current</Text>
						</h4>
						<Text inherit className={classes.bodyText}>
							Primarily working on the frontend of web applications as a contract engineer using
							TypeScript, React, React Bootstrap, SASS, Formik, and Redux Toolkit.
						</Text>
						<List size='md' withPadding className={classes.listWrapper}>
							<List.Item>
								Used Jest and React Testing Library to cover 31 components with 163 tests, achieving
								over 65% coverage.
							</List.Item>
							<List.Item>
								Fixed multiple bugs found while creating mentioned testing suite
							</List.Item>
							<List.Item>
								Conformed all forms to have the same logic, validation and appearance with Formik
								and SASS
							</List.Item>
						</List>
					</div>
					<h3>
						<Text inherit weight={500} size={window.innerWidth < 600 ? 20 : 24}>
							Disease Investigator | LFCHD
						</Text>
					</h3>
					<div className={classes.cardWrapper}>
						<h4>
							<Text inherit>September 2021 - April 2022</Text>
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
							<Text inherit>June 2015 - September 2021</Text>
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
		</>
	)
}

export default WorkExperience

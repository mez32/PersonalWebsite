import { Card, createStyles, Space } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../store/store'
import { Pages } from '../types'
import AboutMe from './AboutMe'
import CardTabs from './CardTabs'
import ContactMe from './ContactMe'
import Knowledge from './Knowledge'
import WorkExperience from './WorkExperience'

const useStyles = createStyles((theme) => ({
	card: {
		width: '60%',
		// marginBottom: '9rem',
		margin: '0 auto 9rem',
		backgroundColor: '#27272a',
		fontSize: '1.25rem',
		color: 'inherit',
		maxWidth: '65rem',
		'@media (max-width: 37.5rem)': {
			width: '97%',
			right: '1.5%',
			left: '1.5%',
			fontSize: '1.063rem',
			lineHeight: '1.5rem',
			marginBottom: '2rem',
		},
	},
	ExtCardAbout: {
		marginBottom: '8rem',
		'@media (min-height: 58.125rem)': {
			marginBottom: '15rem',
		},
		'@media (max-width: 37.5rem)': {
			marginBottom: '1rem',
		},
	},
	ExtCardKnowledge: {
		marginBottom: '3rem',
		'@media (min-height: 58.125rem)': {
			marginBottom: '15rem',
		},
		'@media (max-width: 37.5rem)': {
			marginBottom: '1rem',
		},
	},
	ExtCardContact: {
		marginBottom: '20rem',
		'@media (min-height: 58.125rem)': {
			marginBottom: '25rem',
		},
		'@media (max-width: 37.5rem)': {
			marginBottom: '21rem',
		},
	},
}))

const BigCard: React.FC = () => {
	const { classes } = useStyles()
	const page: Pages = useAppSelector((state) => state.navSlice.page)

	const [tabValue, setTabValue] = useState(page)

	useEffect(() => {
		setTabValue(page)
	}, [page])

	return (
		<Card
			p={window.innerWidth < 600 ? 'sm' : 'xl'}
			className={`${classes.card} ${tabValue === Pages.contactMe && classes.ExtCardContact} ${
				tabValue === Pages.aboutMe && classes.ExtCardAbout
			} ${tabValue === Pages.knowledge && classes.ExtCardKnowledge}`}
			shadow='md'
			radius='lg'
		>
			<CardTabs />
			{tabValue === Pages.aboutMe && <AboutMe />}
			{tabValue === Pages.knowledge && <Knowledge />}
			{tabValue === Pages.workExperience && <WorkExperience />}
			{tabValue === Pages.contactMe && <ContactMe />}
			<Space h='sm' />
		</Card>
	)
}

export default BigCard

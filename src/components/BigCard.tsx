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
		'@media (max-width: 1800px)': {
			width: '75%',
			right: '12.5%',
			left: '12.5%',
		},
		'@media (max-width: 600px)': {
			width: '97%',
			right: '1.5%',
			left: '1.5%',
			margin: '15px 0 0 0',
			fontSize: '17px',
		},
		backgroundColor: '#151515',
		right: '22.5%',
		left: '22.5%',
		width: '55%',
		fontSize: '20px',
		margin: '15px',
		marginBottom: '85px',
		p: {
			textAlign: 'left',
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
			className={classes.card}
			shadow='md'
			radius='lg'
		>
			<CardTabs />
			{tabValue === Pages.aboutMe && <AboutMe />}
			{tabValue === Pages.knowledge && <Knowledge />}
			{tabValue === Pages.workExperience && <WorkExperience />}
			{tabValue === Pages.contactMe && <ContactMe />}
			<Space h='lg' />
		</Card>
	)
}

export default BigCard

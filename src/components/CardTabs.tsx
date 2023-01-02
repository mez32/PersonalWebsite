import { createStyles, Tabs } from '@mantine/core'
import React from 'react'
import { NavActions } from '../store/navSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Pages } from '../types'

const useStyles = createStyles((theme) => ({
	wrapper: {
		margin: '0 1rem',
	},
	tabs: {
		marginBottom: '1rem',
		'@media (max-width: 37.5rem)': {
			marginBottom: '1.5rem',
		},
	},
	tab: {
		font: 'inherit',
		color: 'inherit',
		fontSize: '1rem',
		padding: '0.4rem',
		'&:hover': {
			color: '#f4f4f5',
			textDecoration: 'underline',
			backgroundColor: 'inherit',
		},
		'&:active': {
			color: '#f4f4f5',
			textDecoration: 'underline',
		},
		'@media (min-width: 112.5rem)': {
			fontSize: '1.2rem',
		},
	},
}))

const CardTabs: React.FC = () => {
	const { classes } = useStyles()
	const dispatch = useAppDispatch()
	const tabValue = useAppSelector((state) => state.navSlice.page)
	return (
		<div className={classes.wrapper}>
			<Tabs
				value={tabValue}
				onTabChange={(value: Pages) => dispatch(NavActions.navAction(value))}
				className={classes.tabs}
				color='dark'
			>
				<Tabs.List grow>
					<Tabs.Tab className={classes.tab} value={Pages.aboutMe}>
						{window.innerWidth < 600 ? 'About' : 'About Me'}
					</Tabs.Tab>
					<Tabs.Tab className={classes.tab} value={Pages.knowledge}>
						Knowledge
					</Tabs.Tab>
					<Tabs.Tab styles={{}} className={classes.tab} value={Pages.workExperience}>
						{window.innerWidth < 600 ? 'Work' : 'Work Experience'}
					</Tabs.Tab>
					<Tabs.Tab className={classes.tab} value={Pages.contactMe}>
						{window.innerWidth < 600 ? 'Contact' : 'Contact Me'}
					</Tabs.Tab>
				</Tabs.List>
			</Tabs>
		</div>
	)
}

export default CardTabs

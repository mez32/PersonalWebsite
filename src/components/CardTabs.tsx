import { createStyles, Tabs } from '@mantine/core'
import React from 'react'
import { NavActions } from '../store/navSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Pages } from '../types'

const useStyles = createStyles((theme) => ({
	tabs: {
		marginBottom: '0.938rem',
	},
	tab: {
		font: 'inherit',
		fontSize: '1rem',
		padding: '0.4rem',
	},
}))

const CardTabs: React.FC = () => {
	const { classes } = useStyles()
	const dispatch = useAppDispatch()
	const tabValue = useAppSelector((state) => state.navSlice.page)
	return (
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
				<Tabs.Tab className={classes.tab} value={Pages.workExperience}>
					{window.innerWidth < 600 ? 'Work' : 'Work Experience'}
				</Tabs.Tab>
				<Tabs.Tab className={classes.tab} value={Pages.contactMe}>
					{window.innerWidth < 600 ? 'Contact' : 'Contact Me'}
				</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}

export default CardTabs

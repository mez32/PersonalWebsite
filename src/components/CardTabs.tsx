import { createStyles, Tabs } from '@mantine/core'
import React from 'react'
import { NavActions } from '../store/navSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Pages } from '../types'

const useStyles = createStyles((theme) => ({
	tabs: {
		marginBottom: '15px',
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
			variant='pills'
			className={classes.tabs}
			color='gray'
			radius='md'
		>
			<Tabs.List grow>
				<Tabs.Tab value={Pages.aboutMe}>{window.innerWidth < 600 ? 'About' : 'About Me'}</Tabs.Tab>
				<Tabs.Tab value={Pages.knowledge}>Knowledge</Tabs.Tab>
				<Tabs.Tab value={Pages.workExperience}>
					{window.innerWidth < 600 ? 'Work' : 'Work Experience'}
				</Tabs.Tab>
				<Tabs.Tab value={Pages.contactMe}>
					{window.innerWidth < 600 ? 'Contact' : 'Contact Me'}
				</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}

export default CardTabs

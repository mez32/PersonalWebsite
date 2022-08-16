import { createStyles, Tabs } from '@mantine/core'
import { NavActions } from '../store/navSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Pages } from '../types'

const useStyles = createStyles((theme) => ({
	tabs: {
		marginBottom: '15px',
	},
}))

const CardTabs = () => {
	const { classes } = useStyles()
	const dispatch = useAppDispatch()
	const tabValue = useAppSelector((state) => state.navSlice.page)
	return (
		<Tabs
			value={tabValue}
			onTabChange={(value: Pages) => dispatch(NavActions.navAction(value))}
			inverted
			variant='pills'
			className={classes.tabs}
			color='gray'
			radius='md'
		>
			<Tabs.List grow>
				<Tabs.Tab value={Pages.aboutMe}>About Me</Tabs.Tab>
				<Tabs.Tab value={Pages.knowledge}>Knowledge</Tabs.Tab>
				<Tabs.Tab value={Pages.workExperience}>Work Experience</Tabs.Tab>
				<Tabs.Tab value={Pages.contactMe}>Contact Me</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}

export default CardTabs

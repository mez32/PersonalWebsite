import { Anchor, Container, createStyles, List, ThemeIcon, Tooltip } from '@mantine/core'
import {
	IconEye,
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileDownload,
	IconMail,
} from '@tabler/icons'
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
	list: {
		textAlign: 'left',
		marginTop: '1.5rem',
		color: 'inherit',
	},
	linkOverride: {
		fontFamily: 'IBM Plex Sans, sans-serif',
		textDecoration: 'none',
		'&:hover': {
			color: '#f4f4f5',
			textDecoration: 'underline',
		},
		'@media (min-width: 112.5rem)': {
			fontSize: '1.5rem',
			lineHeight: '110%',
		},
	},
	icon: {
		verticalAlign: 'middle',
	},
}))
const ContactMe: React.FC = () => {
	const { classes } = useStyles()

	return (
		<>
			<h2 className={classes.title}>Contact Me</h2>
			<div className={classes.divider} />
			<Container size={window.innerWidth < 600 ? 290 : 310}>
				<List spacing={35} size='xl' withPadding center className={classes.list}>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconBrandLinkedin />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='linkedin.com/in/mez32'>
							<Anchor
								href='https://www.linkedin.com/in/mez32'
								target='_blank'
								underline={false}
								variant='text'
								className={classes.linkOverride}
							>
								LinkedIn
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconBrandGithub />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='github.com/mez32'>
							<Anchor
								href='https://github.com/mez32'
								target='_blank'
								underline={false}
								variant='text'
								className={classes.linkOverride}
							>
								Github
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconMail />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='Email me: amesmer32@gmail.com'>
							<Anchor
								href='mailto:amesmer32@gmail.com'
								underline={false}
								variant='text'
								className={classes.linkOverride}
							>
								Email
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconEye />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='View my dark themed resume'>
							<Anchor
								href='/resume-dark-theme'
								target='_blank'
								underline={false}
								variant='text'
								className={classes.linkOverride}
							>
								View Dark Resume
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconFileDownload />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='Download my dark themed resume'>
							<Anchor
								href='files/alexMesmerResumeDarkTheme.pdf'
								underline={false}
								variant='text'
								className={classes.linkOverride}
								download
							>
								Save Dark Resume
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconEye />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='View my light themed resume'>
							<Anchor
								href='/resume-light-theme'
								target='_blank'
								underline={false}
								variant='text'
								className={classes.linkOverride}
							>
								View Light Resume
							</Anchor>
						</Tooltip>
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon className={classes.icon} variant='outline'>
								<IconFileDownload />
							</ThemeIcon>
						}
					>
						<Tooltip color='gray' label='Download my light themed resume'>
							<Anchor
								href='files/alexMesmerResumeLightTheme.pdf'
								underline={false}
								variant='text'
								className={classes.linkOverride}
								download
							>
								Save Light Resume
							</Anchor>
						</Tooltip>
					</List.Item>
				</List>
			</Container>
		</>
	)
}

export default ContactMe

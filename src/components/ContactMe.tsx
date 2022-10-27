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
	bodyText: {
		textAlign: 'left',
	},
	linkOverride: {
		'&:hover': {
			color: 'white',
		},
	},
}))
const ContactMe: React.FC = () => {
	const { classes } = useStyles()

	return (
		<Container size={220}>
			<h2>Contact Me</h2>
			<List spacing='xl' size='xl' withPadding center className={classes.bodyText}>
				<List.Item
					icon={
						<ThemeIcon variant='light' color='gray'>
							<IconBrandLinkedin />
						</ThemeIcon>
					}
				>
					<Tooltip label='linkedin.com/in/mez32'>
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
						<ThemeIcon variant='light' color='gray'>
							<IconBrandGithub />
						</ThemeIcon>
					}
				>
					<Tooltip label='github.com/mez32'>
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
						<ThemeIcon variant='light' color='gray'>
							<IconMail />
						</ThemeIcon>
					}
				>
					<Tooltip label='Send me an email with one click: amesmer32@gmail.com'>
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
						<ThemeIcon variant='light' color='gray'>
							<IconEye />
						</ThemeIcon>
					}
				>
					<Tooltip label='View my dark themed resume'>
						<Anchor
							href='/resume-dark-theme'
							target='_blank'
							underline={false}
							variant='text'
							className={classes.linkOverride}
						>
							Resume (Dark)
						</Anchor>
					</Tooltip>
				</List.Item>
				<List.Item
					icon={
						<ThemeIcon variant='light' color='gray'>
							<IconFileDownload />
						</ThemeIcon>
					}
				>
					<Tooltip label='Download my dark themed resume'>
						<Anchor
							href='files/alexMesmerResumeDarkTheme.pdf'
							underline={false}
							variant='text'
							className={classes.linkOverride}
							download
						>
							Resume (Dark)
						</Anchor>
					</Tooltip>
				</List.Item>
				<List.Item
					icon={
						<ThemeIcon variant='light' color='gray'>
							<IconEye />
						</ThemeIcon>
					}
				>
					<Tooltip label='View my light themed resume'>
						<Anchor
							href='/resume-light-theme'
							target='_blank'
							underline={false}
							variant='text'
							className={classes.linkOverride}
						>
							Resume (Light)
						</Anchor>
					</Tooltip>
				</List.Item>
				<List.Item
					icon={
						<ThemeIcon variant='light' color='gray'>
							<IconFileDownload />
						</ThemeIcon>
					}
				>
					<Tooltip label='Download my light themed resume'>
						<Anchor
							href='files/alexMesmerResumeLightTheme.pdf'
							underline={false}
							variant='text'
							className={classes.linkOverride}
							download
						>
							Resume (Light)
						</Anchor>
					</Tooltip>
				</List.Item>
			</List>
		</Container>
	)
}

export default ContactMe

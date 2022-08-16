import { Anchor, Container, createStyles, List, ThemeIcon, Tooltip } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload, IconMail } from '@tabler/icons'

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
const ContactMe = () => {
	const { classes } = useStyles()

	return (
		<Container size={175}>
			<h2>Contact Me</h2>
			<List spacing='md' size='xl' withPadding className={classes.bodyText}>
				<List.Item
					icon={
						<ThemeIcon variant='light' color='gray'>
							<IconBrandLinkedin />
						</ThemeIcon>
					}
				>
					<Tooltip label='Add me on LinkedIn'>
						<Anchor
							href='https://www.linkedin.com/in/alex-mesmer-40a93b198/'
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
					<Tooltip label='View my Github'>
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
					<Tooltip label='Send me an email with one click'>
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
							<IconFileDownload />
						</ThemeIcon>
					}
				>
					<Tooltip label='Download a copy of my resume'>
						<Anchor
							href='files/alexMesmerResume.pdf'
							underline={false}
							variant='text'
							className={classes.linkOverride}
							download
						>
							My Resume
						</Anchor>
					</Tooltip>
				</List.Item>
			</List>
		</Container>
	)
}

export default ContactMe

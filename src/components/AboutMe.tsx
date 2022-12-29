import { Anchor, Blockquote, Container, createStyles, Space, Text, Tooltip } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
	wrapper: {
		textAlign: 'left',
	},
	linkOverride: {
		fontFamily: 'IBM Plex Sans, sans-serif',
		fontWeight: 600,
		'&:hover': {
			color: 'white',
			textDecoration: 'underline',
		},
	},
	textWrapper: {
		lineHeight: '1.9rem',
	},
	container: {
		marginBottom: '1rem',
	},
}))

const AboutMe: React.FC = () => {
	const { classes } = useStyles()
	return (
		<Container className={classes.container}>
			<h2>A Bit About Me</h2>
			<div className={classes.wrapper}>
				<Blockquote cite='- Paul Cookson'>
					Great web design without functionality is like a sports car with no engine.
				</Blockquote>
				<Space h='sm' />
				<Text inherit className={classes.textWrapper}>
					&emsp; Hi there, my name is Alex Mesmer and I currently live here in Lexington, KY and
					work in frontend web development as a Software Engineer at a local start up. At the onset
					of the pandemic I began to teach myself JavaScript and related frameworks as a way to grow
					myself, personally and professionally, for the future and beyond. I have always been
					intrigued in building things and knowing how they work under the hood so I decided to take
					it on in the digital realm.
				</Text>{' '}
				<Space h='sm' />
				<Text inherit className={classes.textWrapper}>
					&emsp; I had a desire to break into this field of tech on my own terms and set my own
					course for success. With the help of friends who are already professionals in this area, I
					was able to become proficient in only a year and a half. From a complete novice to
					applying to where I am now, I have already demonstrated a wealth of knowledge acquired
					from online courses and have also picked up even more valuable skills working along side
					my awesome team. Thanks for visiting my site, feel free to look around and learn more
					about me and reach out to me with any kind of inquiries.{' '}
				</Text>{' '}
				<Space h='sm' />
				<Text inherit className={classes.textWrapper}>
					&emsp; This site was built entirely by me using TypeScript, Vite, React, Redux Toolkit,
					and Mantine UI and is being hosted on Vercel.{' '}
					<Tooltip position='top-start' label='github.com/mez32/PersonalWebsite'>
						<Anchor
							href='https://github.com/mez32/PersonalWebsite'
							target='_blank'
							variant='text'
							className={classes.linkOverride}
							italic
						>
							Here
						</Anchor>
					</Tooltip>{' '}
					is the Github repo for it. Both my resumes were created on a React site only using HTML
					and CSS and a tool to export the page into a PDF and come in both a dark and light theme
					and can be found on my Contact Me tab.
				</Text>
			</div>
		</Container>
	)
}

export default AboutMe

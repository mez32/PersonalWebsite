import { Anchor, Blockquote, Container, createStyles, Space, Text, Tooltip } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	linkOverride: {
		'&:hover': {
			color: 'white',
		},
	},
}))

const AboutMe = () => {
	const { classes } = useStyles()
	return (
		<Container>
			<h2>A Bit About Me</h2>
			<Blockquote cite='- Paul Cookson'>
				Great web design without functionality is like a sports car with no engine.
			</Blockquote>
			<Space h='sm' />
			<Text align='left' inherit>
				&emsp; Hi there, my name is Alex Mesmer and I currently live here in Lexington, KY and work
				in full stack web development as a Software Engineer at a small start up. At the beginning
				of the pandemic I set out to teach myself JavaScript and related frameworks as a way to grow
				myself, personally and professionally, for the future and beyond since I have always been
				intrigued in building things. So I decided to take it on in the digital realm.
			</Text>{' '}
			<Space h='sm' />
			<Text align='left' inherit>
				&emsp; Both my parents have been in the tech field for decades and it felt appropriate to
				follow in their footsteps but to do it on my own terms and set my own course for success. In
				only a year and a half I went from complete novice to applying to where I am now and have
				demonstrated the knowledge that I have acquired and have picked up even more valuable
				skills. Thanks for visiting my site and feel free to look around and learn more about me.{' '}
			</Text>{' '}
			<Space h='sm' />
			<Text align='left' inherit>
				&emsp; This site was built entirely by me using Vite, React, Redux Toolkit, and Mantine.{' '}
				<Tooltip label='See this repo on Github'>
					<Anchor
						span
						href='https://github.com/mez32/PersonalWebsite'
						target='_blank'
						variant='text'
						className={classes.linkOverride}
					>
						Here
					</Anchor>
				</Tooltip>{' '}
				is the Github repo for it so you can take a look how it works under the hood.
			</Text>
		</Container>
	)
}

export default AboutMe

import { Card, createStyles, Image } from '@mantine/core'
import React from 'react'
import BigCard from './components/BigCard'

const useStyles = createStyles((theme) => ({
	mainDiv: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: '0.03rem',
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		'@media (max-width: 37.5rem)': {
			paddingTop: '0.5rem',
		},
	},
	image: {
		boxShadow: '2px 2px 2px 2px rgb(0 0 0 / 50%)',
		borderRadius: '55px',
	},
	card: {
		backgroundColor: '#27272a',
		width: '60%',
		fontSize: '1.625rem',
		margin: '1rem auto',
		maxWidth: '65rem',
		h1: {
			margin: 0,
			padding: '1rem',
			lineHeight: '100%',
		},
		h3: {
			margin: 0,
			padding: '1rem',
			lineHeight: '100%',
		},
		p: {
			margin: 0,
			lineHeight: '100%',
		},
		'@media (min-width: 112.5rem)': {
			fontSize: '2rem',
			h1: {
				margin: 0,
				padding: '1rem',
				lineHeight: '100%',
			},
			h3: {
				margin: 0,
				padding: '1rem',
				lineHeight: '100%',
			},
			p: {
				margin: 0,
				lineHeight: '100%',
			},
		},

		'@media (max-width: 37.5rem)': {
			width: '97%',
			right: '1.5%',
			left: '1.5%',
			margin: '0',
			marginTop: '0.7rem',
			marginBottom: '0.7rem',
			fontSize: '1.25rem',
			h1: {
				margin: 0,
				padding: '1rem',
				lineHeight: '100%',
			},
			h3: {
				margin: 0,
				padding: '1rem',
				lineHeight: '100%',
			},
			p: {
				margin: 0,
				paddingBottom: '0.5rem',
				lineHeight: '100%',
			},
		},
	},
	divider: {
		left: '10%',
		right: '10%',
		width: '80%',
		height: '0.125rem',
		backgroundColor: '#d4d4d8',
		margin: '0 auto',
	},
}))

const App: React.FC = () => {
	const { classes } = useStyles()
	return (
		<div className={classes.mainDiv}>
			<Card
				className={classes.card}
				p={window.innerWidth < 600 ? 'sm' : 'xl'}
				shadow='md'
				radius='lg'
			>
				<div className={classes.imageContainer}>
					<Image
						radius={55}
						width={170}
						height='auto'
						src='assets/alexImage.webp'
						alt='A picture of me'
						className={classes.image}
					/>
				</div>
				<h1>Alex Mesmer</h1>
				<div className={classes.divider} />
				<h3>Software Engineer</h3>
				<p>Lexington, KY</p>
			</Card>
			<BigCard />
		</div>
	)
}

export default App

import { Card, createStyles, Image } from '@mantine/core'
import React from 'react'
import BigCard from './components/BigCard'

const useStyles = createStyles((theme) => ({
	mainDiv: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		lineHeight: '1.75rem',
		letterSpacing: '0.03rem',
	},
	imageContainer: {
		padding: '1rem',
		margin: '0.938rem',
		display: 'flex',
		justifyContent: 'center',
	},
	card: {
		'@media (max-width: 112.5rem)': {
			width: '75%',
			right: '12.5%',
			left: '12.5%',
		},
		'@media (max-width: 37.5rem)': {
			width: '97%',
			right: '1.5%',
			left: '1.5%',
			margin: '0',
			fontSize: '1.25rem',
		},
		backgroundColor: '#151515',
		right: '22.5%',
		left: '22.5%',
		width: '55%',
		fontSize: '1.625rem',
		margin: '1rem',
		marginBottom: '1rem',
	},
	divider: {
		left: '15%',
		right: '15%',
		width: '70%',
		height: '0.125rem',
		backgroundColor: '#C1C2C5',
		margin: '1rem auto',
	},
}))

const App: React.FC = () => {
	const { classes } = useStyles()
	return (
		<div className={classes.mainDiv}>
			<div className={classes.imageContainer}>
				<Image
					radius={55}
					width={170}
					height='auto'
					src='assets/alexImage.webp'
					alt='A picture of me'
				/>
			</div>
			<Card className={classes.card} p='xs' shadow='md' radius='lg'>
				<h1>Alex Mesmer</h1>
				<div className={classes.divider} />
				<h3>Software Engineer</h3>
				<p>Lexington, KY</p>
			</Card>
			<div>
				<BigCard />
			</div>
		</div>
	)
}

export default App

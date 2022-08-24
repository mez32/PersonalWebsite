import { Card, createStyles, Image } from '@mantine/core'
import React from 'react'
import BigCard from './components/BigCard'

const useStyles = createStyles((theme) => ({
	mainDiv: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		marginBottom: '40px',
	},
	imageContainer: {
		margin: '15px',
		display: 'flex',
		justifyContent: 'center',
	},
	card: {
		'@media (max-width: 1800px)': {
			width: '75%',
			right: '12.5%',
			left: '12.5%',
		},
		'@media (max-width: 600px)': {
			width: '97%',
			right: '1.5%',
			left: '1.5%',
			margin: '0',
			fontSize: '20px',
		},
		backgroundColor: '#151515',
		right: '22.5%',
		left: '22.5%',
		width: '55%',
		fontSize: '26px',
		margin: '15px',
	},
	divider: {
		left: '15%',
		right: '15%',
		width: '70%',
		height: '0.125rem',
		backgroundColor: 'white',
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
					src='assets/alexImage.png'
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

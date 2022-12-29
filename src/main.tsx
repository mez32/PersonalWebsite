import React from 'react'
import { createRoot } from 'react-dom/client'
import { Global, MantineProvider } from '@mantine/core'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './Main.css'

const GlobalStyles = () => {
	return (
		<Global
			styles={(theme) => ({
				body: {
					backgroundColor: '#18181b',
					fontFamily: 'IBM Plex Sans, sans-serif',
					color: '#f4f4f5',
					overscrollBehavior: 'contain',
					height: '100%',
				},
			})}
		/>
	)
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider
				theme={{
					colorScheme: 'dark',
					shadows: {
						xs: '1px 1px 1px rgba(0, 0, 0, 0.3)',
						sm: '1px 1px 4px rgba(0, 0, 0, 0.4)',
						md: '2px 2px 2px 2px rgba(0, 0, 0, 0.5)',
						lg: '3px 3px 4px 5px rgba(0, 0, 0, 0.4)',
						xl: '3px 3px 4px 15px rgba(0, 0, 0, 0.4)',
					},
				}}
			>
				<GlobalStyles />
				<App />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
)

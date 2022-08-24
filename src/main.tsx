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
					backgroundImage: "url('assets/background.jpg')",
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#000000',
					fontFamily: 'Bitter, serif',
					color: 'white',
					overscrollBehavior: 'contain',
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
				}}
			>
				<GlobalStyles />
				<App />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
)

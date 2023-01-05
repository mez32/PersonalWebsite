import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

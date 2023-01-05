import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import WorkExperience from './pages/WorkExperience'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/'>
				<Route index element={<Home />} />
				<Route path='about' element={<AboutMe />} />
				<Route path='knowledge' element={<Knowledge />} />
				<Route path='experience' element={<WorkExperience />} />
				<Route path='contact' element={<ContactMe />} />
			</Route>
		</Routes>
	)
}

export default App

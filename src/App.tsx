import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './pages/main'
import { NotFound } from './pages/notFound'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Main />
						}
					/>
					<Route
						path='*'
						element={
							<NotFound />
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

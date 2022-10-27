import { useState } from 'react'
import { Game } from './components/game'
import { Result } from './components/result'
import { allQuestions } from './questions'
import './index.scss'

const App = () => {
	const [doneGame, setDoneGame] = useState(0)
	const [correctlyApp, setCorrectlyApp] = useState(0)

	const isDoneQuestion = () => {
		setDoneGame(doneGame + 1)
	}
	return (
		<div className='App'>
			{doneGame !== allQuestions.length ? (
				<Game
					isDoneQuestion={isDoneQuestion}
					setCorrectlyApp={setCorrectlyApp}
					correctlyApp={correctlyApp}
				/>
			) : (
				<Result correctlyApp={correctlyApp} />
			)}
		</div>
	)
}

export default App

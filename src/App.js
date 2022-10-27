import { useState } from 'react'
import './index.scss'

function App() {
	const [counter, setCounter] = useState(0)

	const counterPlus = () => {
		setCounter(counter + 1)
	}

	const counterMinus = () => {
		setCounter(counter - 1)
	}
	return (
		<div className='app'>
			<div className='counterWrapper'>
				<h2>Счетчик:</h2>
				<h1>{counter}</h1>
				<div className='counterBtnWrapper'>
					<button onClick={counterMinus}>- Минус</button>
					<button onClick={counterPlus}>+ Плюс</button>
				</div>
			</div>
		</div>
	)
}

export default App

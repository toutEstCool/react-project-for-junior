import { useState } from 'react'
import './index.scss'

function App() {
	const [openModal, setOpenModal] = useState(false)

	return (
		<div className='app'>
			<button onClick={() => setOpenModal(true)} className='openModal'>
				🎃 Тыкни меня
			</button>

			{openModal && (
				<div className='fullPage'>
					<div className={openModal ? 'modal active' : 'modal'}>
						<span onClick={() => setOpenModal(false)}>X</span>
						<img
							src='https://media.giphy.com/media/0eMLDAv9hsmX5ZDkxk/giphy.gif'
							alt='Giphy'
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default App

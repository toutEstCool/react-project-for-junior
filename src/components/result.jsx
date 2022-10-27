export const Result = ({ correctlyApp }) => {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>Правельных ответа {correctlyApp} из 5</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}

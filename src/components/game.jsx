import { useState } from 'react'
import { allQuestions } from '../questions'

export const Game = ({ isDoneQuestion, setCorrectlyApp, correctlyApp }) => {
	// Создайем стэйт шага вопроса
	const [step, setStep] = useState(0)
	// Вытаскиваем объект с вопросами из массива по индексу
	const question = allQuestions[step]
	const [correctly, setCorrectly] = useState(0)

	// Функция которая будет понимать на какой ответ кликнул пользователь
	const currentQuestion = i => {
		// Увеличиваем шаг, переходим к следующему вопросу
		setStep(step + 1)
		isDoneQuestion()
		if (i === allQuestions[step].correct) {
			setCorrectly(correctly + 1)
			setCorrectlyApp(correctlyApp + 1)
		}
	}

	// Отображение процентов
	const percentageOfQuestionCompletion = Math.round(
		(step / allQuestions.length) * 100
	)

	return (
		<>
			<div className='progress'>
				<div
					style={{ width: `${percentageOfQuestionCompletion}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((q, i) => (
					<li onClick={() => currentQuestion(i)} key={q}>
						{q}
					</li>
				))}
			</ul>
		</>
	)
}

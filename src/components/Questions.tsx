import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAnswer, addPoints, newRandomQuestion } from '../features/gameSlice'
import { QuestionModel } from '../models/questions'
import { getBooleanValue } from '../helpers/helpers'

const Questions = () => {
  const { categories, difficulties, gameMode } = useAppSelector((state: RootState) => state.settings)
  const { questions, currentQuestion, points, answers } = useAppSelector((state: RootState) => state.game)
  // const 
  const dispatch = useAppDispatch()

  const handleUserChoice = (choice: string, answer: string) => {
    if (choice === answer) {
      dispatch(addAnswer(true))
      dispatch(addPoints(100))
    } else {
      dispatch(addAnswer(false))
    }
    dispatch(newRandomQuestion())
  }

  return (
    <div>
      <span>Mode de jeu {gameMode}</span>
      <span>Difficulté: {difficulties}</span>
      <span>Categories: {categories}</span>
      <span>Nombre de questions: {questions.length}</span>
      <span>points {points}</span>

      <div className='w-[1024px] m-auto'>
        <div className='flex'>
          <span>{currentQuestion.category}</span>
          <span>{currentQuestion.gameMode}</span>
          <span>{currentQuestion.difficulty}</span>
        </div>
        <div>
          <h2>{currentQuestion.question}</h2>
          <div className='grid grid-cols-2 gap-20'>
            {currentQuestion.choices.map((choice: string) => (
              <button
                key={choice}
                onClick={() => handleUserChoice(choice, currentQuestion.answer)}
                className='bg-blue-300 py-4 rounded-lg hover:bg-blue-400 cursor-pointer'
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {answers.map(answer => {
          return (
            <p>{answer.question}: {getBooleanValue(answer.isCorrect)}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Questions

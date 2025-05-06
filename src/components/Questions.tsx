import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAnswer, addPoints, newRandomQuestion } from '../features/gameSlice'
import { getAllQuestionsById } from '../helpers/helpers'
import { LadderBoardType } from '../models/ladderBoard'
import { useState } from 'react'

const Questions = () => {
  const { categories, difficulties, gameMode } = useAppSelector((state: RootState) => state.settings)
  const { questions, currentQuestion, points, answers } = useAppSelector((state: RootState) => state.game)
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

  const [ladderBoard, setLadderBoard] = useState<LadderBoardType>(LadderBoardType.ANSWERS)

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

      <div className='w-[1024px] m-auto border-[1px] border-gray-300 rounded-lg p-1 mt-4'>
        <div className='grid grid-cols-2 mb-3 rounded-lg'>
          <button
            onClick={() => setLadderBoard(LadderBoardType.ANSWERS)}
            className={`rounded-tl-lg py-2 ${
              ladderBoard === LadderBoardType.ANSWERS ? "bg-gray-300" : "hover:bg-gray-200 cursor-pointer"}`}
          >
            Réponses
          </button>
          <button
            onClick={() => setLadderBoard(LadderBoardType.STATISTICS)}
            className={`rounded-tr-lg py-2 ${
              ladderBoard === LadderBoardType.STATISTICS ? "bg-gray-300" : "hover:bg-gray-200 cursor-pointer"}`}
          >
            Statistiques
          </button>
        </div>
        {ladderBoard === LadderBoardType.ANSWERS &&
          <div className='flex flex-col gap-[2px]'>
            {getAllQuestionsById(questions, answers).map((answer) => {
              return (
                <p
                  className={`rounded px-2 w-max ${answer.isCorrect ? "bg-green-200" : "bg-red-200"}`}
                >
                  {answer.question}
                </p>
              )
            })}
          </div>
        }
        {ladderBoard === LadderBoardType.STATISTICS &&
          <div className='flex flex-col gap-[2px]'>
            <p>Bonnes réponses: {answers.reduce((acc, curr) => { return curr.isCorrect ? acc += 1 : acc }, 0)}</p>
            <p>Mauvaises réponses: {answers.reduce((acc, curr) => { return !curr.isCorrect ? acc += 1 : acc }, 0)}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Questions

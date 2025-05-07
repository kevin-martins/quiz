import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAnswer, addPoints, newRandomQuestion } from '../features/gameSlice'
import { setDifficultyColor, setGameModeColor } from '../helpers/setColors'
import LadderBoard from './LadderBoard'
import { setShowExplanation } from '../features/settingsSlice'
import { useState } from 'react'

const Questions = () => {
  const { categories, difficulties, gameMode, showExplanation } = useAppSelector((state: RootState) => state.settings)
  const { questions, currentQuestion, points } = useAppSelector((state: RootState) => state.game)
  const [explanationModal, setExplanationModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleUserChoice = (choice: string, answer: string) => {
    if (showExplanation) {
      //close the show to generate the next question 
    } else {

    }
    if (choice === answer) {
      dispatch(addAnswer(true))
      dispatch(addPoints(100))
    } else {
      dispatch(addAnswer(false))
    }
    dispatch(newRandomQuestion())
  }

  const handleOpenExplanationModal = () => {
    setExplanationModal(true)
  }

  const handleCloseExplanationModal = () => {
    setExplanationModal(false)
  }

  const handleExplanationValue = (e: any) => {
    dispatch(setShowExplanation(e.target.checked))
  }
  return (
    <div className='flex flex-col gap-2'>
      <span>Mode de jeu: {gameMode}</span>
      <span>Difficulté: {difficulties.map(difficulty => <span className={`px-4 py-1 mx-1 ${setDifficultyColor(difficulty)} rounded-lg`}>{difficulty}</span>)}</span>
      <span>Categories: {categories}</span>
      <span>Nombre de questions: {questions.length}</span>
      <input onChange={handleExplanationValue} type="checkbox" />

      <div className='w-[1024px] m-auto relative'>
        <div className='flex items-center mb-5'>
          <h2 className='text-5xl pr-4'>{currentQuestion.category}</h2>
          <div className='flex flex-row gap-2 mt-auto text-sm'>
            <p className={`px-4 py-1 rounded-lg ${setGameModeColor(currentQuestion.gameMode)}`}>{currentQuestion.gameMode}</p>
            <p className={`px-4 py-1 rounded-lg ${setDifficultyColor(currentQuestion.difficulty)}`}>{currentQuestion.difficulty}</p>
          </div>
          <span className='text-xl ml-auto bg-yellow-200 px-2 mt-auto py-1 rounded-lg'>{points} $</span>
        </div>
        <div>
          <h2 className='text-lg'>{currentQuestion.question}</h2>
          <div className='grid grid-cols-2 gap-5 mt-2'>
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
        {explanationModal && showExplanation &&
          <div className='absolute z-50 border-[2px] border-gray-100 rounded-lg p-2 top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white'>
            <button
              onClick={handleCloseExplanationModal}
              className='ml-auto float-right cursor-pointer'
            >
              &#10060;
            </button>
            <p>
              {currentQuestion.explanation}
            </p>
          </div>
        }
      </div>
      <LadderBoard />
    </div>
  )
}

export default Questions

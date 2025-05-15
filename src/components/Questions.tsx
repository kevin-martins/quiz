import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAnswer, addPoints, setCurrentQuestion } from '../features/gameSlice'
import { setDifficultyColor, setGameModeColor } from '../helpers/setColors'
import LadderBoard from './LadderBoard'
import { setBadAnswerExplanation, setShowExplanation } from '../features/settingsSlice'
import { useEffect, useState } from 'react'

const Questions = () => {
  const { categories, difficulties, gameMode, showExplanation, badAnswerExplanation } = useAppSelector((state: RootState) => state.settings)
  const { questions, filteredQuestions, currentQuestion, points } = useAppSelector((state: RootState) => state.game)
  const [explanationModal, setExplanationModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleUserChoice = (choice: string, answer: string) => {
    if (showExplanation) {
      const hasWon = handleVictory(choice, answer)
      if (hasWon && badAnswerExplanation) {
        setExplanationModal(false)
        dispatch(setCurrentQuestion())
      } else {
        setExplanationModal(true)
      }
    } else {
      handleVictory(choice, answer)
      dispatch(setCurrentQuestion())
    }
  }

  const handleVictory = (choice: string, answer: string): boolean => {
    if (choice === answer) {
      dispatch(addPoints(100))
      dispatch(addAnswer(true))
      return true
    }
    dispatch(addAnswer(false))
    return false
  }

  useEffect(() => {
    if (showExplanation && !explanationModal) {
      dispatch(setCurrentQuestion())
    }
  }, [explanationModal])

  const handleCloseExplanationModal = () => {
    setExplanationModal(false)
  }

  const handleShowExplanationValue = (e: any) => {
    dispatch(setShowExplanation(e.target.checked))
  }

  const handleBadAnswerExplanationValue = (e: any) => {
    dispatch(setBadAnswerExplanation(e.target.checked))
  }

  return (
    <div className='flex flex-col gap-2'>
      <span>Mode de jeu: {gameMode}</span>
      <span>Difficulté: {difficulties.map(difficulty => <span className={`px-4 py-1 mx-1 ${setDifficultyColor(difficulty)} rounded-lg`}>{difficulty}</span>)}</span>
      <span>Categories: {categories}</span>
      <span>Nombre de questions: {questions.length}</span>
      <span>Questions filtrées: {filteredQuestions.length}</span>
      <div className='flex gap-2'>
        <label htmlFor="showExplanation" className='flex items-center gap-2'>
          Afficher les explications
          <input
            id="showExplanation"
            className='mt-auto mb-1'
            onChange={handleShowExplanationValue}
            type="checkbox"
            checked={showExplanation}
          />
        </label>
        {showExplanation &&
          <label htmlFor="badAnswerExplanation" className='flex items-center gap-2'>
            seulement en cas de mauvaise réponse
            <input
              id="badAnswerExplanation"
              className='mt-auto mb-1'
              onChange={handleBadAnswerExplanationValue}
              type="checkbox"
              checked={badAnswerExplanation}
            />
          </label>
        }
      </div>

      <div className='w-[1024px] m-auto'>
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
        {(explanationModal && showExplanation) &&
          <div
            onClick={handleCloseExplanationModal}
            className='fixed w-full h-screen bg-black/50 z-50 top-0 left-0 cursor-pointer'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='absolute w-[600px] rounded-lg p-1 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white cursor-default'
            >
              <button
                onClick={handleCloseExplanationModal}
                className='float-right cursor-pointer hover:text-red-500 duration-300 hover:rotate-90'
              >
                &#10060;
              </button>
              <p className='p-1 m-1'>
                {currentQuestion.explanation}
              </p>
              <button onClick={handleCloseExplanationModal} className='bg-blue-300 hover:bg-blue-400 cursor-pointer rounded-lg w-44 py-1 mt-3 mb-1 ml-1'>Ok</button>
            </div>
          </div>
        }
      </div>
      <LadderBoard />
    </div>
  )
}

export default Questions

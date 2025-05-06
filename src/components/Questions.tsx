import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAnswer, addPoints, newRandomQuestion } from '../features/gameSlice'
import { getAllQuestionsById, setDifficultyColor, setGameModeColor } from '../helpers/helpers'
import { LadderBoardType } from '../models/ladderBoard'
import { useState } from 'react'
import LadderBoard from './LadderBoard'

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

  return (
    <div className='flex flex-col gap-4'>
      <span>Mode de jeu: {gameMode}</span>
      <span>Difficulté: {difficulties.map(difficulty => <span className={`px-4 py-1 mx-1 ${setDifficultyColor(difficulty)} rounded-lg`}>{difficulty}</span>)}</span>
      <span>Categories: {categories}</span>
      <span>Nombre de questions: {questions.length}</span>
      <span>points {points}</span>

      <div className='w-[1024px] m-auto'>
        <div className='flex items-center mb-5'>
          <h2 className='text-5xl pr-4'>{currentQuestion.category}</h2>
          <div className='flex flex-row gap-2 mt-auto text-sm'>
            <p className={`px-4 py-1 rounded-lg ${setGameModeColor(currentQuestion.gameMode)}`}>{currentQuestion.gameMode}</p>
            <p className={`px-4 py-1 rounded-lg ${setDifficultyColor(currentQuestion.difficulty)}`}>{currentQuestion.difficulty}</p>
          </div>
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
      </div>
      <LadderBoard />
    </div>
  )
}

export default Questions

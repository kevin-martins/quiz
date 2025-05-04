import { RootState } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useState } from 'react'
import { DataModel } from '../models/data'
import { addPoints } from '../features/gameSlice'
import { getRandomNumber } from '../helpers/helpers'

const Questions = () => {
  const { categories, difficulties, gameMode } = useAppSelector((state: RootState) => state.settings)
  const { data, points } = useAppSelector((state: RootState) => state.game)
  const dispatch = useAppDispatch()
  const [selectedQuestion, setSelectedQuestions] = useState<DataModel>(data[getRandomNumber(data.length)])


  const handleUserChoice = (choice: string, answer: string) => {
    if (choice === answer) {
      dispatch(addPoints(100))
    }
  }

  return (
    <div>
      <span>Mode de jeu {gameMode}</span>
      <span>Difficulté: {difficulties}</span>
      <span>Categories: {categories}</span>
      <span>Nombre de questions: {data.length}</span>
      <span>points {points}</span>

      <div className='w-[1024px] m-auto'>
        <div className='flex'>
          <span>{selectedQuestion.category}</span>
          <span>{selectedQuestion.gameMode}</span>
          <span>{selectedQuestion.difficulty}</span>
        </div>
        <div>
          <h2>{selectedQuestion.question}</h2>
          <div className='grid grid-cols-2 gap-20'>
            {selectedQuestion.choices.map(choice => (
              <button
                key={choice}
                onClick={() => handleUserChoice(choice, selectedQuestion.answer)}
                className='bg-blue-300 py-4 rounded-lg hover:bg-blue-400 cursor-pointer'
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Questions

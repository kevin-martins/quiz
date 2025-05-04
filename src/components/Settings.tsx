import { useState } from 'react'
import { RootState } from '../app/store'
import { DifficultiesModel } from '../models/difficulties'
import { CategoriesModel } from '../models/categories'
import { addCategory, addDifficulty, removeCategory, removeDifficulty, setGameMode } from '../features/settingsSlice'
import { categories } from '../data/categories'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { difficulties } from '../data/difficulties'
import { gameModes } from '../data/gameModes'
import { GameModesModel } from '../models/gameModes'
import { filterQuestions } from '../helpers/helpers'
import { setQuestions } from '../features/gameSlice'

const Categories = () => {
  const selectedCategories: CategoriesModel[] = useAppSelector((state: RootState) => state.settings.categories)
  const dispatch = useAppDispatch()

  const handleRemoveCategory = (category: CategoriesModel) => {
    return dispatch(removeCategory(category))
  }

  const handleAddCategory = (category: CategoriesModel) => {
    if (selectedCategories.includes(category)) {
      return dispatch(removeCategory(category))
    }
    return dispatch(addCategory(category))
  }

  return (
    <div className='m-2'>
      <h2 className='border-b-[.5px] w-max mb-3 text-lg'>Catégories</h2>
      <div className='grid grid-cols-4 gap-2 m-2'>
        {selectedCategories.map(category => {
          return (
            <button
              key={category}
              onClick={() => handleRemoveCategory(category)}
              className='flex bg-gray-200 rounded relative hover:bg-red-300 cursor-pointer'
            >
              <span className='text-left w-full mx-2'>{category}</span>
              <span className=''>&#10060;</span>
            </button>
          )
        })}
      </div>
      <div className='grid grid-cols-4 gap-2 m-2'>
        {categories.map(category => {
          return (
            <button
              key={category}
              onClick={() => handleAddCategory(category)}
              className={`w-full border-[.5px] border-gray-400 rounded cursor-pointer ${selectedCategories.includes(category) ? "bg-green-200 hover:bg-red-200" : "hover:bg-gray-200"}`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const Difficulty = () => {
  const selectedDifficulties: DifficultiesModel[] = useAppSelector((state: RootState) => state.settings.difficulties)
  const dispatch = useAppDispatch()

  const handleRemoveDifficulty = (difficulty: DifficultiesModel) => {
    return dispatch(removeDifficulty(difficulty))
  }

  const handleAddDifficulty = (difficulty: DifficultiesModel) => {
    if (selectedDifficulties.includes(difficulty)) {
      return dispatch(removeDifficulty(difficulty))
    }
    return dispatch(addDifficulty(difficulty))
  }

  return (
    <div className='m-2'>
      <h2 className='border-b-[.5px] w-max mb-3 text-lg'>Difficultés</h2>
      <div className='grid grid-cols-4 gap-2 m-2'>
        {selectedDifficulties.map(difficulty => {
          return (
            <button
              key={difficulty}
              onClick={() => handleRemoveDifficulty(difficulty)}
              className='flex bg-gray-200 rounded relative hover:bg-red-300 cursor-pointer'
            >
              <span className='text-left w-full mx-2'>{difficulty}</span>
              <span className=''>&#10060;</span>
            </button>
          )
        })}
      </div>
      <div className='grid grid-cols-4 gap-2 m-2'>
        {difficulties.map(difficulty => {
          return (
            <button
              key={difficulty}
              onClick={() => handleAddDifficulty(difficulty)}
              className={`w-full border-[.5px] border-gray-400 rounded cursor-pointer ${selectedDifficulties.includes(difficulty) ? "bg-green-200 hover:bg-red-200" : "hover:bg-gray-200"}`}
            >
              {difficulty}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const GameMode = () => {
  const selectedGameMode = useAppSelector((state: RootState) => state.settings.gameMode)
  const dispatch = useAppDispatch()

  const handleSetGameMode = (gameMode: GameModesModel) => {
    dispatch(setGameMode(gameMode))
  }

  return (
    <div className='m-2'>
      <h2 className='border-b-[.5px] w-max mb-3 text-lg'>Mode de jeu</h2>
      <div className='grid grid-cols-4 gap-2 m-2'>
        <span className='text-left rounded px-2 bg-gray-200'>{selectedGameMode}</span>
      </div>
      <div className='grid grid-cols-4 gap-2 m-2'>
        {gameModes.map(gameMode => {
          return (
            <button
              key={gameMode}
              onClick={() => handleSetGameMode(gameMode)}
              className={`w-full border-[.5px] border-gray-400 rounded cursor-pointer ${selectedGameMode === gameMode ? "bg-green-200 hover:bg-red-200" : "hover:bg-gray-200"}`}
            >
              {gameMode}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const Settings = () => {
  const [open, setOpen] = useState(false)
  const settings = useAppSelector((state: RootState) => state.settings)
  const dispatch = useAppDispatch()

  const handleStartGame = () => {
    setOpen(false)
    const questions = filterQuestions(settings)
    dispatch(setQuestions(questions))
  }

  return (
    <div className='ml-auto'>
      <button
        onClick={() => setOpen(true)}
        className='cursor-pointer'
      >
        paramètres
      </button>
      {open &&
        <div className='absolute grid place-content-center z-10 top-0 right-0 w-full h-screen bg-gray-800/70'>
          <h1 className='text-xl bg-white rounded-t w-min px-5'>Paramètres</h1>
          <div className='bg-white rounded-b rounded-tr'>
            <Categories />
            <Difficulty />
            <GameMode />
            <div className=''>
              <button
                onClick={handleStartGame}
                className='float-right m-2 relative py-1 px-8 w-fit z-0 rounded-lg border border-black overflow-hidden bg-white font-medium hover:text-white
                  before:absolute before:bg-gray-600 before:-z-10 cursor-pointer
                  before:content-[&quot;] before:inset-0 before:w-44 before:h-10 before:top-0 before:right-0
                  before:-translate-x-[110%] hover:before:translate-x-[0%] before:duration-300
                  active:scale-95 duration-300'
              >
                C'est parti !
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Settings

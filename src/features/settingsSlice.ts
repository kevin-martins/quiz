import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DifficultiesModel } from '../models/difficulties'
import { CategoriesModel } from '../models/categories'
import { GameModesModel } from '../models/gameModes'
import { SettingsModels } from '../models/settings'

const initialState: SettingsModels = {
  gameMode: 'Classique',
  categories: ['Histoire',
    'Géographie',
    'Mathématiques',
    'Physique',
    'Chimie',
    'Biologie',
    'Littérature',
    'Art',
    'Musique',
    'Cinéma',
    'Informatique',
    'Culture Générale',
    'Sciences Sociales',
    'Sport'
  ],
  difficulties: ['Facile', 'Moyen'],
  showExplanation: false
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameModesModel>) => {
      state.gameMode = action.payload
    },
    setCategories: (state, action: PayloadAction<CategoriesModel[]>) => {
      state.categories = action.payload
    },
    addCategory: (state, action: PayloadAction<CategoriesModel>) => {
      state.categories.push(action.payload)
    },
    removeCategory: (state, action: PayloadAction<CategoriesModel>) => {
      const index = state.categories.indexOf(action.payload)
      state.categories.splice(index, 1)
    },
    addDifficulty: (state, action: PayloadAction<DifficultiesModel>) => {
      state.difficulties.push(action.payload)
    },
    removeDifficulty: (state, action: PayloadAction<DifficultiesModel>) => {
      const index = state.difficulties.indexOf(action.payload)
      state.difficulties.splice(index, 1)
    },
    setShowExplanation: (state, action: PayloadAction<boolean>) => {
      state.showExplanation = action.payload
    },
  },
})

export const {
  setGameMode,
  addCategory,
  removeCategory,
  addDifficulty,
  removeDifficulty,
  setShowExplanation
} = settingsSlice.actions

export default settingsSlice.reducer
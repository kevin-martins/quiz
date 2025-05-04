import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data } from '../data/data'
import { DataModel } from '../models/data'

export interface InitialState {
  data: DataModel[],
  points: number,
  goodAnswer: DataModel[],
  badAnswer: DataModel[]
}

const initialState: InitialState = {
  data,
  points: 0,
  goodAnswer: [],
  badAnswer: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataModel[]>) => {
      state.data = action.payload
    },
    addGoodAnswer: (state, action: PayloadAction<DataModel>) => {
      state.goodAnswer.push(action.payload)
    },
    addBadAnswer: (state, action: PayloadAction<DataModel>) => {
      state.badAnswer.push(action.payload)
    },
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    },
  },
})

export const {
  setData,
  addGoodAnswer,
  addBadAnswer,
  addPoints
} = gameSlice.actions

export default gameSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { questions } from '../data/questions'
import { QuestionModel } from '../models/questions'
import { getRandomNumber } from '../helpers/helpers'

export interface InitialState {
  questions: QuestionModel[],
  currentQuestion: QuestionModel,
  oldQuestions: string[],
  points: number,
  goodAnswer: string[],
  badAnswer: string[]
}

const initialState: InitialState = {
  questions,
  currentQuestion: questions[getRandomNumber(questions.length)],
  oldQuestions: [],
  points: 0,
  goodAnswer: [],
  badAnswer: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionModel[]>) => {
      state.questions = action.payload
    },
    newRandomQuestion: (state) => {
      
      state.currentQuestion = state.questions[getRandomNumber(state.questions.length)]
    },
    addGoodAnswer: (state, action: PayloadAction<string>) => {
      state.goodAnswer.push(action.payload)
    },
    addBadAnswer: (state, action: PayloadAction<string>) => {
      state.badAnswer.push(action.payload)
    },
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    },
  },
})

export const {
  setQuestions,
  newRandomQuestion,
  addGoodAnswer,
  addBadAnswer,
  addPoints
} = gameSlice.actions

export default gameSlice.reducer
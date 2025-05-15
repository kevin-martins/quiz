import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { questions } from '../data/questions'
import { QuestionModel } from '../models/questions'
import { getRandomNumber } from '../helpers/helpers'
import { AnswersModel } from '../models/answers'

export interface InitialState {
  questions: QuestionModel[],
  filteredQuestions: QuestionModel[],
  currentQuestion: QuestionModel,
  answers: AnswersModel[],
  points: number
}

const initialState: InitialState = {
  questions,
  filteredQuestions: questions,
  currentQuestion: questions[getRandomNumber(questions.length)],
  answers: [],
  points: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionModel[]>) => {
      state.questions = action.payload
    },
    setFilteredQuestions: (state, action: PayloadAction<QuestionModel[]>) => {
      state.filteredQuestions = action.payload
    },
    setCurrentQuestion: (state) => {
      let randomQuestion = state.filteredQuestions[getRandomNumber(state.filteredQuestions.length)]
      while (state.answers.some(answer => randomQuestion.id === answer.id)) {
        randomQuestion = state.filteredQuestions[getRandomNumber(state.filteredQuestions.length)]
      }
      state.currentQuestion = randomQuestion
    },
    addAnswer: (state, action: PayloadAction<boolean>) => {
      state.answers.push({
        id: state.currentQuestion.id,
        isCorrect: action.payload
      })
    },
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    }
  },
})

export const {
  setQuestions,
  setFilteredQuestions,
  setCurrentQuestion,
  addAnswer,
  addPoints
} = gameSlice.actions

export default gameSlice.reducer
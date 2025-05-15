import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { questions } from '../data/questions'
import { QuestionModel } from '../models/questions'
import { getRandomNumber, shuffleArray } from '../helpers/helpers'
import { AnswersModel } from '../models/answers'
import { stat } from 'fs'

export interface InitialState {
  questions: QuestionModel[],
  filteredQuestions: QuestionModel[],
  currentQuestion: QuestionModel | null,
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
      state.filteredQuestions = shuffleArray(action.payload)
    },
    setCurrentQuestion: (state) => {
      const filteredQuestionsLength = state.filteredQuestions.length
      if (filteredQuestionsLength !== 0) {
        const randomNumber = getRandomNumber(filteredQuestionsLength)
        const newQuestion = state.filteredQuestions[randomNumber]
        state.filteredQuestions.splice(randomNumber, 1)
        state.currentQuestion = {
          ...newQuestion,
          choices: shuffleArray(newQuestion.choices)
        }
      } else {
        state.currentQuestion = null
      }
    },
    addAnswer: (state, action: PayloadAction<boolean>) => {
      state.answers.push({
        id: state.currentQuestion!.id,
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
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { questions } from '../data/questions'
import { QuestionModel } from '../models/questions'
import { getAllQuestionsById, getRandomNumber } from '../helpers/helpers'

type AnswersModel = {
  id: string
  isCorrect: boolean
}

export interface InitialState {
  questions: QuestionModel[],
  currentQuestion: QuestionModel,
  answers: AnswersModel[],
  points: number
}

const initialState: InitialState = {
  questions,
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
    newRandomQuestion: (state) => {
      
      state.currentQuestion = state.questions[getRandomNumber(state.questions.length)]
    },
    addAnswer: (state, action: PayloadAction<boolean>) => {
      state.answers.push({
        id: state.currentQuestion.id,
        isCorrect: action.payload
      })
    },
    getAllQuestionsById: (state) => {
      return state.answers.reduce((acc: QuestionModel[], curr: AnswersModel) => {
        return acc.push(state.questions[state.questions.indexOf(curr.id)])
      }, [])
    },
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    }
  },
})

export const {
  setQuestions,
  newRandomQuestion,
  addAnswer,
  addPoints
} = gameSlice.actions

export default gameSlice.reducer
import { CategoriesModel } from "./categories"
import { DifficultiesModel } from "./difficulties"
import { GameModesModel } from "./gameModes"

export type QuestionModel = {
  id: string
  category: CategoriesModel
  gameMode: GameModesModel
  difficulty: DifficultiesModel
  question: string
  choices: string[]
  answer: string
  explanation: string
}
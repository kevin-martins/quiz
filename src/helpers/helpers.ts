import { questions } from "../data/questions"
import { AnswersModel } from "../models/answers"
import { DifficultiesModel } from "../models/difficulties"
import { QuestionModel } from "../models/questions"
import { SettingsModels } from "../models/settings"

export const getGameModeDescription = {
  "Classique": "Réponds à une série de questions avec plusieurs choix de réponse.",
  "Contre-la-montre": "Réponds à un maximum de questions en un temps limité.",
  "Sans faute": "Le jeu s'arrête à la première erreur. Jusqu'où iras-tu ?",
  "Vrai ou Faux": "Réponds à des affirmations en choisissant si elles sont vraies ou fausses.",
  "Survie": "Chaque bonne réponse te fait gagner du temps, chaque mauvaise t'en fait perdre.",
  "Masqué": "Réponds à une série de questions avec une des réponses masquée."
}

export const filterQuestions = (settings: SettingsModels): QuestionModel[] => {
  const { categories, difficulties, gameMode } = settings

  return questions.filter(question => categories.includes(question.category) && difficulties.includes(question.difficulty) && question.gameMode.includes(gameMode))
}

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const getBooleanValue = (boolean: boolean) => {
  return boolean ? "Vrai" : "Faux"
}

export const getAllQuestionsById = (questions: QuestionModel[], answers: AnswersModel[]) => {
  return answers.reduce((acc: (QuestionModel & { isCorrect: boolean })[], curr: AnswersModel) => {
    const { id, isCorrect } = curr
    const question = questions.find((question: QuestionModel) => question.id === id)!
    acc.push({ ...question, isCorrect })
    return acc
  }, [])
}

export const setGameModeColor = (gameMode: string) => {
  switch (gameMode) {
    case "Classique":
      return "bg-blue-300"
    case "Contre la montre":
      return "bg-fuchsia-300"
    case "Sans faute":
      return "bg-indigo-300"
    case "Vrai ou Faux":
      return "bg-lime-300"
    case "Survie":
      return "bg-cyan-300"
    case "Masqué":
      return "bg-orange-300"
    default:
      return ""
  }
}

export const setDifficultyColor = (difficulty: DifficultiesModel) => {
  switch (difficulty as DifficultiesModel) {
    case "Facile":
      return "bg-green-300"
    case "Moyen":
      return "bg-yellow-300"
    case "Difficile":
      return "bg-red-300"
    case "Extrême":
      return "bg-purple-300"
    default:
      return ""
  }
}
